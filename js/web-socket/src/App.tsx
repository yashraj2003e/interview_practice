import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

export default function App() {
  const socketRef = useRef<Socket | null>(null);
  const [totalOnline, setTotalOnline] = useState(0);
  const [text, setText] = useState("");
  const textRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.height = "auto";
      textRef.current.style.height = `${textRef.current.scrollHeight}px`;
    }
  }, [text]);

  useEffect(() => {
    async function init() {
      const options = {
        "force new connection": true,
        reconnectionAttempt: "Infinity",
        timeout: 10000,
        transports: ["websocket"],
      };
      socketRef.current = await io("http://localhost:3000", options);

      socketRef.current.on("count", (users) => {
        console.log(users);
        setTotalOnline(users);
      });

      socketRef.current.on("change", (text) => {
        setText(text);
      });
    }

    init();
  }, []);

  useEffect(() => {
    if (socketRef.current) {
      socketRef.current.emit("change", text);
    }
  }, [text]);

  return (
    <div className="flex space-y-4 flex-col">
      <p>{totalOnline}</p>
      <textarea
        value={text}
        ref={textRef}
        rows={1}
        className="border-2 border-black"
        onChange={(e) => setText(e.target.value)}
      ></textarea>
    </div>
  );
}
