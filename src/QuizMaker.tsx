import { LeaderBoard } from "./components/leaderboard";

export const QuizMaker = ({}) => {
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
                }}
                className="text-white"
              >
                <section className="py-4">
                  <p className="tracking-wide py-2 text-lg">Question</p>

                  <textarea
                    className="rounded-lg w-full bg-kiwi-200 text-slate-200 px-6 py-3 font-semibold outline-kiwi-100 focus:outline-1 focus:shadow-none scrollbar"
                    placeholder="ex: What's the square root of 169?"
                    rows={4}
                  />
                </section>
                <section className="py-4">
                  <p className="tracking-wide py-2 text-lg">Options</p>
                  <section className="flex flex-col">
                    <input
                      className="rounded-lg bg-kiwi-200 my-2 text-slate-200 px-6 py-3 font-semibold outline-kiwi-100 focus:outline-1 focus:shadow-none"
                      type="text"
                      placeholder="Option A"
                    />
                    <input
                      className="rounded-lg bg-kiwi-200 my-2 text-slate-200 px-6 py-3 font-semibold outline-kiwi-100 focus:outline-1 focus:shadow-none"
                      type="text"
                      placeholder="Option B"
                    />
                    <input
                      className="rounded-lg bg-kiwi-200 my-2 text-slate-200 px-6 py-3 font-semibold outline-kiwi-100 focus:outline-1 focus:shadow-none"
                      type="text"
                      placeholder="Option C"
                    />
                    <input
                      className="rounded-lg bg-kiwi-200 my-2 text-slate-200 px-6 py-3 font-semibold outline-kiwi-100 focus:outline-1 focus:shadow-none"
                      type="text"
                      placeholder="Option D"
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
            <section className="max-h-full flex-shrink">
              <LeaderBoard></LeaderBoard>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};
