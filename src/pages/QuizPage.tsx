import { Quiz } from "../components/quiz";
import { Stats } from "../components/stats";
import { LeaderBoard } from "../components/leaderboard";
// import toast, { Toaster } from "react-hot-toast";

export const QuizPage = ({
  username,
  question,
  options,
  sendAnswer,
}: QuizProps) => {
  const answerHandler = (answer: string) => {
    console.log(answer);

    sendAnswer(options.indexOf(answer));

    // toast.custom(
    //   (t) => (
    //     <div
    //       className={`${
    //         t.visible ? "animate-enter" : "animate-leave"
    //       } bg-kiwi-150 px-4 py-2 text-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    //     >
    //       ✅ Sent the solution!
    //     </div>
    //   ),
    //   {
    //     duration: 2000,
    //   }
    // );
  };
  return (
    <>
      <section className="w-full flex justify-center">
        <section className="w-full max-w-md flex-nowrap max-h-full lg:max-w-7xl flex flex-col items-center lg:items-start lg:flex-row gap-8 lg:gap-6 lg:px-12 lg:pb-5 px-4 pb-5">
          <section className="flex-1 w-full">
            {question && options.length === 4 ? (
              <Quiz
                question={question}
                options={options}
                callback={answerHandler}
              ></Quiz>
            ) : (
              <section className="bg-kiwi-600 rounded-xl p-8 w-full h-full box-border">
                <div className="text-white py-32 text-center">
                  No Question Added Yet
                </div>
              </section>
            )}
          </section>
          <section className="flex flex-col gap-6 flex-1 w-full">
            <section className="h-fit">
              <Stats
                stats={{
                  username,
                  correct: 3,
                  total: 5,
                  category: "Math",
                }}
              ></Stats>
            </section>
            <section className="max-h-full flex-shrink">
              <LeaderBoard></LeaderBoard>
            </section>
          </section>
        </section>
      </section>
      {/* <Toaster></Toaster> */}
    </>
  );
};

type QuizProps = {
  username: string;
  question: string;
  options: string[];
  sendAnswer: (answer: number) => void;
};
