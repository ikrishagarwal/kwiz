import { Pill } from "./elements/pill";

export const Stats = ({ stats }: StatsParams) => {
  return (
    <section className="bg-kiwi-600 rounded-xl p-4 md:p-8 box-border">
      <section className="flex justify-center">
        <Pill content="Stats"></Pill>
      </section>
      <section className="mt-6 text-white tracking-wider leading-relaxed flex justify-center">
        <section className="w-fit">
          <p>Username: {stats.username}</p>
          <p>
            Correct: {stats.correct}/{stats.total}
          </p>
          <p>Category: {stats.category}</p>
        </section>
      </section>
    </section>
  );
};

type StatsParams = {
  stats: Stats;
};

type Stats = {
  username: string;
  correct: number;
  total: number;
  category: string;
};
