import { useState } from "react";
import { QuizPage } from "./QuizPage";
import toast, { Toaster } from "react-hot-toast";

export const JoinRoom = ({ credentials, roomId }: JoinRoomProps) => {
  const [roomName, setRoomName] = useState(roomId);
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <>
      {showQuiz ? (
        <QuizPage username={credentials.username}></QuizPage>
      ) : (
        <section className="flex-grow text-white flex items-center justify-center">
          <section className="h-fit w-fit  bg-kiwi-600 rounded-lg py-8 px-16">
            <h1 className="text-white text-3xl py-4 font-heading text-center">
              Join Room
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
                          ❌ Room Name isn't valid!
                        </div>
                      ),
                      {
                        duration: 2000,
                      }
                    );
                  setShowQuiz(true);
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
                    Join
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

type CredentialsData = {
  username: string;
  role: "organizer" | "attendee";
};

type JoinRoomProps = {
  credentials: CredentialsData;
  roomId: string;
};
