import { Pill } from "./elements/pill";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

export const Quiz = ({ question, options }: QuizParams) => {
  const prefixMap = ["A", "B", "C", "D"];
  const [_answer, setAnswer] = useState("");

  const handleRadio = (event: ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  return (
    <section className="bg-kiwi-600 rounded-xl p-8 w-full h-full box-border overflow-y-auto scrollbar">
      <Pill content="Question. 1"></Pill>
      <p className="text-white text-base my-6">Q. {question}</p>
      <form
        action="#"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <section className="py-4">
          {options?.map((option, index) => (
            <Option
              handler={handleRadio}
              content={option}
              prefix={prefixMap[index]}
            ></Option>
          ))}
        </section>
        <section className="flex justify-center items-center">
          <button
            type="submit"
            className="rounded-lg px-10 py-4 text-white bg-kiwi-200"
          >
            Submit
          </button>
        </section>
      </form>
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
        <div className="bg-kiwi-150 my-4 py-4 text-white text-base font-semibold px-6 rounded-lg uppercase tracking-wide flex flex-row items-center">
          <p className="rounded-full bg-kiwi-700 size-10 mr-4 tracking-wide flex items-center justify-center">
            <p>{prefix}</p>
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
};

type OptionParams = {
  content: string;
  prefix: string;
  handler: ChangeEventHandler<HTMLInputElement>;
};
