import { Header } from "./components/header";
import { Quiz } from "./components/quiz";
function App() {
  return (
    <>
      <section className="min-h-screen bg-kiwi-900">
        <Header></Header>
        <section className="flex flex-row">
          <Quiz
            question="What is the square root of 169?"
            options={["7", "13", "18", "17"]}
          ></Quiz>
          <Quiz
            question="What is the square root of 169?"
            options={["7", "13", "18", "17"]}
          ></Quiz>
        </section>
      </section>
    </>
  );
}

export default App;
