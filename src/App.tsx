import { useState } from "react";
import { Home } from "./Home";
import { Header } from "./components/header";
import { QuizPage } from "./QuizPage";
// import { Room } from "./Room";
import { QuizMaker } from "./QuizMaker";

import "./index.css";

const App = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [username, setUsername] = useState("");

  const homeCallback = ({ username, role }: FormData) => {
    console.log(username, role);
    setShowQuiz(true);
    setUsername(username);
  };

  // const roomCallback = (roomName: string) => {
  //   console.log(roomName)
  // };

  return (
    <>
      <section className="min-h-screen bg-kiwi-900 flex h-full flex-col">
        <Header></Header>
        <section className="flex-grow flex w-full">
          {/* {showQuiz ? (
            <QuizPage username={username}></QuizPage>
          ) : (
            <Home homeCallback={homeCallback}></Home>
          )} */}
          {/* <Room roomCallback={roomCallback}></Room> */}
          <QuizMaker></QuizMaker>
        </section>
      </section>
    </>
  );
};

type FormData = {
  username: string;
  role: string;
};

export default App;
