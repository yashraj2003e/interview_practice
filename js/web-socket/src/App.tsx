import { Editor } from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import io, { Socket } from "socket.io-client";

const App = () => {
  const [text, setText] = useState<string | undefined>(""); // Minimum 200 lines
  const [totalOnline, setTotalOnline] = useState(0);
  const socketRef = useRef<Socket | null>(null);
  const editorRef = useRef<unknown>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cursors, setCursors] = useState<unknown[]>([]);

  useEffect(() => {
    function getEvent(e: unknown) {
      console.log(e);
      if (editorRef.current) {
        console.log(editorRef.current);
      }
    }

    document.addEventListener("click", getEvent);

    return () => document.removeEventListener("click", getEvent);
  }, []);

  useEffect(() => {
    const options = {
      "force new connection": true,
      reconnectionAttempts: Infinity,
      timeout: 10000,
      transports: ["websocket"],
      reconnection: true,
    };
    socketRef.current = io("http://localhost:3000", options);

    socketRef.current.on("count", (users, curText) => {
      setTotalOnline(users);
      if (curText && curText.length > 0) setText(curText);
    });

    socketRef.current.on("change", (newText) => {
      setText(newText);
    });

    socketRef.current.on("update-cursors", (users) => {
      setCursors(
        Object.entries(users).map(([userId, position]) => ({
          userId,
          position,
        }))
      );
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Online Users: {totalOnline}</h1>
      <Editor
        value={text}
        language="javascript"
        className="h-[100vh]"
        options={{
          minimap: {
            enabled: false,
          },
          // lineNumbers: 3,
          scrollBeyondLastLine: false, // Avoid excessive scrolling
          lineNumbersMinChars: 6, // Set a reasonable width for line numbers
          glyphMargin: false,
        }}
        onChange={(value: string | undefined) => {
          setText(value);
          if (value === "") {
            // setText(Array(200).fill("").join("\n"));
            // console.log(
            //   editorRef.current.setPosition({ lineNumber: 1, column: 1 })
            // );
            // editorRef.current?.setPosition({ lineNumber: 1, column: 1 });
            // socketRef.current?.emit("change", text);
            // return;
          }
          socketRef.current?.emit("change", value);
        }}
        onMount={(ins) => {
          editorRef.current = ins;
          editorRef.current?.focus();
          ins.onDidChangeCursorPosition(() => {
            const position = ins.getPosition();
            socketRef.current?.emit("cursor", position);
            console.log("Cursor position:", position);
          });
        }}
      />
    </div>
  );
};

export default App;
