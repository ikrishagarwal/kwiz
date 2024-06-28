import { Header } from "./components/header";
import { Quiz } from "./components/quiz";
import { Stats } from "./components/stats";
import { LeaderBoard } from "./components/leaderboard";

function App() {
  return (
    <>
      <section className="min-h-screen bg-kiwi-900 h-screen grid grid-rows-12 gap-16">
        <section className="grid-row-span-1">
          <Header></Header>
        </section>
        <section className="grid grid-cols-2 gap-16 grid-row-span-11 h-full">
          <Quiz
            question="What is the square root of 169?"
            options={["7", "13", "18", "17"]}
          ></Quiz>
          <section className="h-[75%]">
            <Stats
              stats={{
                username: "John Doe",
                correct: 3,
                total: 5,
                category: "Math",
              }}
            ></Stats>
            <LeaderBoard></LeaderBoard>
          </section>
        </section>
      </section>
    </>
  );
}

export default App;
