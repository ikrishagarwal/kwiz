import { useState } from "react";
import { Home } from "./Home";
import { Header } from "./components/header";
import { QuizPage } from "./QuizPage";

import "./index.css";

const App = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [username, setUsername] = useState("");

  const returnFormData = ({ username, role }: FormData) => {
    console.log(username, role);
    setShowQuiz(true);
    setUsername(username);
  };

  return (
    <>
      <section className="min-h-screen bg-kiwi-900 flex h-full flex-col">
        <Header></Header>
        <section className="flex-grow flex w-full">
          {showQuiz ? (
            <QuizPage username={username}></QuizPage>
          ) : (
            <Home returnFormData={returnFormData}></Home>
          )}
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
