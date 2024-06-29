import { Pill } from "./elements/pill";
import "../index.css";

export const Quiz = ({ question, options }: QuizParams) => {
  const prefixMap = ["A", "B", "C", "D"];
  return (
    <section className="bg-kiwi-600 rounded-xl p-8 w-full h-full box-border overflow-y-auto scrollbar">
      <Pill content="Question. 1"></Pill>
      <p className="text-white text-base my-6">Q. {question}</p>
      {options?.map((option, index) => (
        <Option content={option} prefix={prefixMap[index]}></Option>
      ))}
    </section>
  );
};

const Option = ({ content, prefix }: OptionParams) => {
  return (
    <div className="bg-kiwi-150 my-4 py-4 text-white text-base font-semibold px-6 rounded-lg uppercase tracking-wide flex flex-row">
      <p className="rounded-full bg-kiwi-700 py-1 px-3 mr-4 tracking-wide">
        {prefix}
      </p>
      <p className="py-1">{content}</p>
    </div>
  );
};

type QuizParams = {
  options?: string[];
  question?: string;
};

type OptionParams = {
  content: string;
  prefix: string;
};
