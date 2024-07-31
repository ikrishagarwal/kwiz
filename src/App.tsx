import { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import { Header } from "./components/header";
import { Room } from "./pages/Room";
import { JoinRoom } from "./pages/JoinRoom";

import "./index.css";
import { CredentialsContext } from "./credentials";

// TODO: use a proper short ID generator
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState<CredentialsData>({
    username: "Guest",
    userId: "Guest-" + Date.now(),
    role: "attendee",
  });
  const [roomId, setRoomId] = useState("");

  const homeCallback = ({ username, role }: CredentialsData) => {
    setIsLoggedIn(true);
    setCredentials({
      username,
      role,
      userId: credentials.userId,
    });
  };

  useEffect(() => {
    const urlRoomId = window.location.hash;
    if (urlRoomId.trim().length <= 1) return;

    setRoomId(urlRoomId.substring(1));
  }, []);

  return (
    <>
      <CredentialsContext.Provider value={credentials}>
        <section className="min-h-screen bg-kiwi-900 flex h-full flex-col">
          <Header></Header>
          <section className="flex-grow flex w-full">
            {!isLoggedIn ? (
              <Home homeCallback={homeCallback}></Home>
            ) : credentials.role === "organizer" ? (
              <Room credentials={credentials}></Room>
            ) : (
              <JoinRoom credentials={credentials} roomId={roomId}></JoinRoom>
            )}
          </section>
        </section>
      </CredentialsContext.Provider>
    </>
  );
};

type CredentialsData = {
  username: string;
  role: "organizer" | "attendee";
  userId: string;
};

export default App;
