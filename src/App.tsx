import { useEffect, useState } from "react";
import { Home } from "./Home";
import { Header } from "./components/header";
import { Room } from "./Room";
import { JoinRoom } from "./JoinRoom";

import "./index.css";

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

  useEffect(() => {
    const urlRoomId = window.location.hash;
    if (urlRoomId.trim().length <= 1) return;

    setRoomId(urlRoomId.substring(1));
  }, []);

  return (
    <>
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
    </>
  );
};

type CredentialsData = {
  username: string;
  role: "organizer" | "attendee";
};

export default App;
