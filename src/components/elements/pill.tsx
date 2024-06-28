export const Pill = ({ content }: PillParams) => {
  return (
    <span className="inline-block bg-kiwi-200 text-white text-xs font-semibold px-6 py-1 rounded-lg uppercase tracking-wide">
      {content}
    </span>
  );
};

type PillParams = {
  content: string;
};
