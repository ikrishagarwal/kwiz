// import { QuizPage } from "./QuizPage";
import { Home } from "./Home";
import { QuizPage } from "./QuizPage";
import { Header } from "./components/header";

function App() {
  return (
    <>
      <section className="min-h-screen bg-kiwi-900 flex h-full flex-col">
        <section className="box-border">
          <Header></Header>
        </section>
        <section className="flex-grow flex items-stretch w-full">
          {/* <Home></Home> */}
          <QuizPage></QuizPage>
        </section>
      </section>
    </>
  );
}

export default App;
