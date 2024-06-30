import { useState } from "react";
import { LeaderBoard } from "./components/leaderboard";
import { Pill } from "./components/elements/pill";

export const QuizMaker = ({ roomId }: QuizMakerProps) => {
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");

  return (
    <>
      <section className="w-full flex justify-center">
        <section className="w-full pt-8 max-w-md flex-nowrap max-h-full lg:max-w-7xl flex flex-col items-center lg:items-start lg:flex-row gap-8 lg:gap-6 lg:px-12 lg:pb-5 px-4 pb-5">
          <section className="flex-1 w-full">
            <section className="bg-kiwi-600 rounded-xl p-8 w-full h-full box-border">
              <form
                action="#"
                onSubmit={(event) => {
                  event.preventDefault();

                  if (question.trim() === "")
                    return alert("Question can't be empty.");
                  if (
                    !optionA.trim() ||
                    !optionB.trim() ||
                    !optionC.trim() ||
                    !optionD.trim()
                  )
                    return alert("You have to provide all four options.");

                  const options = [optionA, optionB, optionC, optionD];

                  console.log({
                    question,
                    options,
                  });
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
                    className="px-16 py-4 text-white bg-kiwi-200 rounded-lg"
                    type="submit"
                  >
                    Send
                  </button>
                </section>
              </form>
            </section>
          </section>
          <section className="flex flex-col gap-6 flex-1 w-full">
            <section className="h-fit">
              <section className="bg-kiwi-600 rounded-xl p-4 md:p-8 box-border">
                <section className="flex justify-center">
                  <Pill content="Room"></Pill>
                </section>
                <section className="mt-6 text-white tracking-wider leading-relaxed flex justify-center">
                  <section className="w-fit">
                    <p>
                      Room Code:{" "}
                      <span className="font-mono bg-kiwi-900 px-2 py-1 rounded-md text-sm font-semibold">
                        {roomId}
                      </span>
                    </p>

                    <section className="pt-6 flex justify-center items-center">
                      {/* TODO: add a toast confirmation message */}
                      <button
                        className="px-4 py-2 bg-kiwi-200 rounded-lg"
                        onClick={() =>
                          navigator.clipboard.writeText(
                            window.location.origin + "/room/" + roomId
                          )
                        }
                      >
                        Copy Room Link
                      </button>
                    </section>
                  </section>
                </section>
              </section>
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

type QuizMakerProps = {
  roomId: string;
};
