import { Header } from "./components/header";
import { Quiz } from "./components/quiz";
function App() {
  return (
    <>
      <section className="min-h-screen bg-kiwi-900">
        <Header></Header>
        <section className="flex flex-row">
          <Quiz></Quiz>
          <Quiz></Quiz>
        </section>
      </section>
    </>
  );
}

export default App;
