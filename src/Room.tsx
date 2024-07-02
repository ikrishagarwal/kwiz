import { useState } from "react";
import { QuizMaker } from "./QuizMaker";
import toast, { Toaster } from "react-hot-toast";

export const Room = () => {
  const [roomName, setRoomName] = useState("");
  const [showQuizMaker, setShowQuizMaker] = useState(false);

  return (
    <>
      {showQuizMaker ? (
        <QuizMaker roomId={roomName}></QuizMaker>
      ) : (
        <section className="flex-grow text-white flex items-center justify-center">
          <section className="h-fit w-fit  bg-kiwi-600 rounded-lg py-8 px-16">
            <h1 className="text-white text-3xl py-4 font-heading text-center">
              Create Room
            </h1>
            <section>
              <form
                action="#"
                onSubmit={(event) => {
                  event.preventDefault();

                  if (!roomName.trim())
                    return toast.custom(
                      (t) => (
                        <div
                          className={`${
                            t.visible ? "animate-enter" : "animate-leave"
                          } bg-yellow-950 px-4 py-2 text-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                        >
                          ❌ Empty room name!
                        </div>
                      ),
                      {
                        duration: 2000,
                      }
                    );
                  setShowQuizMaker(true);
                }}
              >
                <section className="py-4">
                  <p className="tracking-wide py-2 text-lg">Room Name:</p>
                  <input
                    className="rounded-lg bg-kiwi-200 text-slate-200 px-6 py-3 font-semibold outline-kiwi-100 focus:outline-1 focus:shadow-none"
                    type="text"
                    placeholder="ex: maths-quiz-class-2"
                    value={roomName}
                    onChange={(event) => {
                      setRoomName(
                        event.target.value.toLowerCase().replace(/\s/g, "-")
                      );
                    }}
                  />
                </section>
                <section className="pt-6 flex justify-center items-center">
                  <button
                    className="w-full py-4 bg-kiwi-200 rounded-lg active:scale-95"
                    type="submit"
                  >
                    Create!
                  </button>
                </section>
              </form>
            </section>
          </section>
        </section>
      )}
      <Toaster></Toaster>
    </>
  );
};
