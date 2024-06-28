import { Header } from "./components/header";
import { Quiz } from "./components/quiz";
import { Stats } from "./components/stats";
import { LeaderBoard } from "./components/leaderboard";

function App() {
  return (
    <>
      <section className="min-h-screen bg-kiwi-900">
        <section className="grid grid-rows-9">
          <section className="row-span-1 box-border">
            <Header></Header>
          </section>
          <section className="grid grid-cols-2 gap-16 row-span-8 box-border">
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
        </section>
      </section>
    </>
  );
}

export default App;
