import { Header } from "./components/header";
import { Quiz } from "./components/quiz";
import { Stats } from "./components/stats";
import { LeaderBoard } from "./components/leaderboard";

function App() {
  return (
    <>
      <section className="min-h-screen bg-kiwi-900 overflow-hidden h-screen">
        <Header></Header>
        <section className="grid grid-cols-2 gap-16">
          <Quiz
            question="What is the square root of 169?"
            options={["7", "13", "18", "17"]}
          ></Quiz>
          <section>
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
