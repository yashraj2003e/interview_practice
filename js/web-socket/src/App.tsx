import React, { useEffect, useRef, useState } from "react";
import io, { Socket } from "socket.io-client";

const App = () => {
  const [text, setText] = useState("");
  const [totalOnline, setTotalOnline] = useState(0);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const options = {
      "force new connection": true,
      reconnectionAttempts: Infinity,
      timeout: 10000,
      transports: ["websocket"],
    };
    socketRef.current = io("http://localhost:3000", options);

    socketRef.current.on("count", (users, curText) => {
      setTotalOnline(users);
      if (curText && curText.length > 0) setText(curText);
    });

    socketRef.current.on("change", (newText) => {
      setText(newText);
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Online Users: {totalOnline}</h1>
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          socketRef.current?.emit("change", e.target.value);
        }}
      />
    </div>
  );
};

export default App;
