import toast, { Toaster } from "react-hot-toast";
import { Pill } from "./elements/pill";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

export const Quiz = ({
  question,
  options,
  submitText,
  callback,
  pillText,
}: QuizParams) => {
  const prefixMap = ["A", "B", "C", "D"];
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleRadio = (event: ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  return (
    <section className="bg-kiwi-600 rounded-xl p-8 w-full h-full box-border">
      <Pill content={pillText || "Question"}></Pill>
      <p className="text-white text-base my-6">Q. {question}</p>
      <form
        action="#"
        onSubmit={(event) => {
          event.preventDefault();

          if (!answer.trim())
            return toast.custom(
              (t) => (
                <div
                  className={`${
                    t.visible ? "animate-enter" : "animate-leave"
                  } bg-yellow-950 px-4 py-2 text-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                >
                  ❌ No option Selected!
                </div>
              ),
              {
                duration: 2000,
              }
            );

          setSubmitted(true);
          callback(answer);
        }}
      >
        <fieldset disabled={submitted}>
          <section className="py-4">
            {options?.map((option, index) => (
              <Option
                handler={handleRadio}
                content={option}
                prefix={prefixMap[index]}
                key={index}
              ></Option>
            ))}
          </section>
          <section className="flex justify-center items-center">
            <button
              type="submit"
              className="rounded-lg px-10 py-4 text-white bg-kiwi-200 active:scale-95 disabled:brightness-50"
            >
              {submitText || "Submit"}
            </button>
          </section>
        </fieldset>
      </form>
      <Toaster></Toaster>
    </section>
  );
};

const Option = ({ content, prefix, handler }: OptionParams) => {
  return (
    <section>
      <input
        type="radio"
        className="hidden quiz-radio"
        name="role-selection"
        id={"option-" + prefix}
        value={content}
        onChange={handler}
      />
      <label htmlFor={"option-" + prefix}>
        <div className="bg-kiwi-150 my-4 py-4 text-white text-base font-semibold px-6 rounded-lg tracking-wide flex flex-row items-center">
          <p className="rounded-full bg-kiwi-700 size-10 mr-4 tracking-wide flex items-center justify-center">
            <span>{prefix}</span>
          </p>
          <p className="py-1">{content}</p>
        </div>
      </label>
    </section>
  );
};

type QuizParams = {
  options?: string[];
  question?: string;
  pillText?: string;
  submitText?: string;
  callback: Function;
};

type OptionParams = {
  content: string;
  prefix: string;
  handler: ChangeEventHandler<HTMLInputElement>;
};
