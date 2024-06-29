// import { QuizPage } from "./QuizPage";
import { useState } from "react";
import { Home } from "./Home";
import { Header } from "./components/header";
import "./index.css";
import { QuizPage } from "./QuizPage";

const App = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const returnFormData = ({ username, role }: FormData) => {
    console.log(username, role);
    setShowQuiz(true);
  };

  return (
    <>
      <section className="min-h-screen bg-kiwi-900 flex h-full flex-col">
        <Header></Header>
        <section className="flex-grow flex w-full">
          {showQuiz ? (
            <QuizPage></QuizPage>
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
