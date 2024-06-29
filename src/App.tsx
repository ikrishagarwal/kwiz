// import { QuizPage } from "./QuizPage";
import { Home } from "./Home";
import { Header } from "./components/header";
import "./index.css";

function App() {
  return (
    <>
      <section className="min-h-screen bg-kiwi-900">
        <section className="grid grid-rows-9">
          <section className="row-span-1 box-border">
            <Header></Header>
          </section>
          <section className="row-span-8">
            <Home></Home>
          </section>
        </section>
      </section>
    </>
  );
}

export default App;
