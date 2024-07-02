import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const QuizMakerForm = ({ callback }: QuizFormProps) => {
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  return (
    <>
      <form
        action="#"
        onSubmit={(event) => {
          event.preventDefault();

          if (question.trim() === "")
            return toast.custom(
              (t) => (
                <div
                  className={`${
                    t.visible ? "animate-enter" : "animate-leave"
                  } bg-yellow-950 px-4 py-2 text-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                >
                  ❌ Question can't be empty!
                </div>
              ),
              {
                duration: 2000,
              }
            );
          if (
            !optionA.trim() ||
            !optionB.trim() ||
            !optionC.trim() ||
            !optionD.trim()
          )
            return toast.custom(
              (t) => (
                <div
                  className={`${
                    t.visible ? "animate-enter" : "animate-leave"
                  } bg-yellow-950 px-4 py-2 text-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                >
                  ❌ All options are ought to be filled mandatorily!
                </div>
              ),
              {
                duration: 2000,
              }
            );

          const options = [optionA, optionB, optionC, optionD];

          callback(question, options);
        }}
        className="text-white"
      >
        <section className="py-4">
          <p className="tracking-wide py-2 text-lg">Question</p>

          <textarea
            className="rounded-lg w-full bg-kiwi-200 text-slate-200 px-6 py-3 font-semibold outline-kiwi-100 focus:outline-1 focus:shadow-none scrollbar"
            placeholder="ex: What's the square root of 169?"
            rows={4}
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
          />
        </section>
        <section className="py-4">
          <p className="tracking-wide py-2 text-lg">Options</p>
          <section className="flex flex-col">
            <input
              className="rounded-lg bg-kiwi-200 my-2 text-slate-200 px-6 py-3 font-semibold outline-kiwi-100 focus:outline-1 focus:shadow-none"
              type="text"
              placeholder="Option A"
              value={optionA}
              onChange={(event) => setOptionA(event.target.value)}
            />
            <input
              className="rounded-lg bg-kiwi-200 my-2 text-slate-200 px-6 py-3 font-semibold outline-kiwi-100 focus:outline-1 focus:shadow-none"
              type="text"
              placeholder="Option B"
              value={optionB}
              onChange={(event) => setOptionB(event.target.value)}
            />
            <input
              className="rounded-lg bg-kiwi-200 my-2 text-slate-200 px-6 py-3 font-semibold outline-kiwi-100 focus:outline-1 focus:shadow-none"
              type="text"
              placeholder="Option C"
              value={optionC}
              onChange={(event) => setOptionC(event.target.value)}
            />
            <input
              className="rounded-lg bg-kiwi-200 my-2 text-slate-200 px-6 py-3 font-semibold outline-kiwi-100 focus:outline-1 focus:shadow-none"
              type="text"
              placeholder="Option D"
              value={optionD}
              onChange={(event) => setOptionD(event.target.value)}
            />
          </section>
        </section>
        <section className="pt-6 flex justify-center items-center">
          <button
            className="px-16 py-4 text-white bg-kiwi-200 rounded-lg active:scale-95"
            type="submit"
          >
            Send
          </button>
        </section>
      </form>
      <Toaster></Toaster>
    </>
  );
};

type QuizFormProps = {
  callback: Function;
};
