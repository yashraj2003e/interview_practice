import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

export default function App() {
  const socketRef = useRef<Socket | null>(null);
  const [totalOnline, setTotalOnline] = useState(0);

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
    }

    init();
  }, []);

  return <div>{totalOnline}</div>;
}
