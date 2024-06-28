export const Pill = ({ content }: PillParams) => {
  return (
    <span className="inline-block bg-kiwi-200 text-white text-xs font-semibold px-2 py-1 rounded-full uppercase tracking-wide">
      {content}
    </span>
  );
};

type PillParams = {
  content: string;
};
