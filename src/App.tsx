import { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import { Header } from "./components/header";
import { Room } from "./pages/Room";
import { JoinRoom } from "./pages/JoinRoom";

import "./index.css";
import { wsUrl } from "./config";
import { WebSocketContext } from "./websocket";
import useWebSocket from "react-use-websocket";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState<CredentialsData>({
    username: "Guest",
    role: "attendee",
  });
  const [roomId, setRoomId] = useState("");

  const homeCallback = ({ username, role }: CredentialsData) => {
    setIsLoggedIn(true);
    setCredentials({
      username,
      role,
    });
  };

  const proto = location.protocol.startsWith("https") ? "wss" : "ws";
  const ws = useWebSocket(`${proto}://${wsUrl}`, {
    onOpen: () => {
      console.log("Connected to server");

      // TODO: remove this on prod, just for testing
      fetch("https://api.ipify.org?format=json")
        .then((response) => response.json())
        .then((data) => {
          ws.sendMessage(`Requester: ${data.ip}`);
        })
        .catch(() => null);
    },
    onClose: () => console.log("Disconnected from server"),
    onError: (event) => console.error(event),
    onMessage: (event) => console.log(event.data),
  });

  useEffect(() => {
    const urlRoomId = window.location.hash;
    if (urlRoomId.trim().length <= 1) return;

    setRoomId(urlRoomId.substring(1));
  }, []);

  return (
    <>
      <WebSocketContext.Provider value={ws}>
        <section className="min-h-screen bg-kiwi-900 flex h-full flex-col">
          <Header></Header>
          <section className="flex-grow flex w-full">
            {!isLoggedIn ? (
              <Home homeCallback={homeCallback}></Home>
            ) : credentials.role === "organizer" ? (
              <Room></Room>
            ) : (
              <JoinRoom credentials={credentials} roomId={roomId}></JoinRoom>
            )}
          </section>
        </section>
      </WebSocketContext.Provider>
    </>
  );
};

type CredentialsData = {
  username: string;
  role: "organizer" | "attendee";
};

export default App;
