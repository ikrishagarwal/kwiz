import { Quiz } from "./components/quiz";
import { Stats } from "./components/stats";
import { LeaderBoard } from "./components/leaderboard";

export const QuizPage = () => {
  return (
    <>
      <section className="grid grid-cols-2 gap-16 box-border">
        <Quiz
          question="What is the square root of 169?"
          options={["7", "13", "18", "17"]}
        ></Quiz>
        <section className="grid grid-rows-8">
          <section className="row-span-3">
            <Stats
              stats={{
                username: "John Doe",
                correct: 3,
                total: 5,
                category: "Math",
              }}
            ></Stats>
          </section>
          <section className="row-span-5">
            <LeaderBoard></LeaderBoard>
          </section>
        </section>
      </section>
    </>
  );
};
