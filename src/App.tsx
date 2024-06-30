import { useState } from "react";
import { Home } from "./Home";
import { Header } from "./components/header";
import { QuizPage } from "./QuizPage";
import { Room } from "./Room";

import "./index.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState<CredentialsData>({
    username: "Guest",
    role: "attendee",
  });

  const homeCallback = ({ username, role }: CredentialsData) => {
    setIsLoggedIn(true);
    setCredentials({
      username,
      role,
    });
  };

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
            <QuizPage username={credentials.username}></QuizPage>
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
