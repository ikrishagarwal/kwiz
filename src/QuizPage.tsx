import { Quiz } from "./components/quiz";
import { Stats } from "./components/stats";
import { LeaderBoard } from "./components/leaderboard";

export const QuizPage = () => {
  return (
    <>
      <section className="w-full flex justify-center">
        <section className="w-full max-w-md flex-nowrap max-h-full lg:max-w-7xl flex flex-col items-center lg:items-start lg:flex-row gap-8 lg:gap-6 lg:px-12 lg:pb-5 px-4 pb-5">
          <section className="flex-1 w-full">
            <Quiz
              question="What is the square root of 169?"
              options={["7", "13", "18", "17"]}
            ></Quiz>
          </section>
          <section className="flex flex-col gap-6 flex-1 w-full">
            <section className="h-fit">
              <Stats
                stats={{
                  username: "John Doe",
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
    </>
  );
};
