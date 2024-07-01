import { LeaderBoard } from "./components/leaderboard";
import { Pill } from "./components/elements/pill";
import { QuizMakerForm } from "./components/QuizMakerForm";
import { Quiz } from "./components/quiz";
import { useState } from "react";

export const QuizMaker = ({ roomId }: QuizMakerProps) => {
  const [questionData, setQuestionData] = useState<QuestionType>({
    question: "",
    options: [],
  });

  const quizMakerFormHandler = (question: string, options: string[]) => {
    console.log({
      question,
      options,
    });

    setQuestionData({
      question,
      options,
    });
  };

  return (
    <>
      <section className="w-full flex justify-center">
        <section className="w-full pt-8 max-w-md flex-nowrap max-h-full lg:max-w-7xl flex flex-col items-center lg:items-start lg:flex-row gap-8 lg:gap-6 lg:px-12 lg:pb-5 px-4 pb-5">
          <section className="flex-1 w-full">
            <section className="bg-kiwi-600 rounded-xl p-8 w-full h-full box-border">
              {questionData.question.trim() ? (
                <Quiz
                  question={questionData.question}
                  options={questionData.options}
                ></Quiz>
              ) : (
                <QuizMakerForm callback={quizMakerFormHandler}></QuizMakerForm>
              )}
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
                            window.location.origin + "#" + roomId
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

type QuestionType = {
  question: string;
  options: string[];
};
