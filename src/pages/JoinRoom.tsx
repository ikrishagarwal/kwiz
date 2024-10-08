import { useState } from "react";
import { QuizPage } from "./QuizPage";
import toast, { Toaster } from "react-hot-toast";

import useWebSocket from "react-use-websocket";
import { wsUrl } from "../config";

export const JoinRoom = ({ credentials, roomId }: JoinRoomProps) => {
  const [roomName, setRoomName] = useState(roomId);
  const [showQuiz, setShowQuiz] = useState(false);

  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState<string[]>([]);

  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  const proto = location.protocol.startsWith("https") ? "wss" : "ws";
  const ws = useWebSocket(`${proto}://${wsUrl}`, {
    onOpen: () => {
      console.log("Connected to server");

      // TODO: remove this on prod, just for testing
      fetch("https://api.ipify.org?format=json")
        .then((response) => response.json())
        .then((data) => {
          ws.sendJsonMessage({
            message: `Requester: ${data.ip}`,
            request_type: "log",
          });
        })
        .catch(() => null);
    },
    onClose: () => console.log("Disconnected from server"),
    onError: (event) => console.error(event),
    onMessage: (event) => {
      console.log(event.data);

      const data = JSON.parse(event.data);

      // handling the response from the server
      // TODO: properly manage the error responses
      if (data.success) {
        toast.custom(
          (t) => (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } bg-kiwi-150 px-4 py-2 text-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              ✅ {data.message}
            </div>
          ),
          {
            duration: 2000,
          }
        );
      } else if (data.error) {
        toast.custom(
          (t) => (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } bg-yellow-950 px-4 py-2 text-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              ❌ {data.message}
            </div>
          ),
          {
            duration: 2000,
          }
        );
      } else if (data.action) {
        switch (data.action) {
          case "add_question":
            console.log("Question:", data.question);
            console.log("Options:", data.options);

            setQuestion(data.question);
            setOptions(data.options);
            break;

          case "submit_answer":
            console.log("Answer:", data);

            setTotal(total + 1);
            setScore(data.score);

            setQuestion("");
            setOptions([]);
            break;

          default:
            console.log("Unrecognized action:", data.action);
            break;
        }
      }
    },
  });

  const sendAnswer = (answer: number) => {
    ws.sendJsonMessage({
      request_type: "answer",
      designation: "attendee",
      roomId,
      userId: credentials.userId,
      answer,
    });
  };

  return (
    <>
      {showQuiz ? (
        <QuizPage
          username={credentials.username}
          question={question}
          options={options}
          sendAnswer={sendAnswer}
          score={score}
          total={total}
        ></QuizPage>
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

                  // TODO: fix the userId and make it unique
                  ws.sendJsonMessage({
                    request_type: "register_user",
                    designation: "attendee",
                    roomId: roomName,
                    username: credentials.username,
                    userId: credentials.userId,
                  });
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
  userId: string;
};

type JoinRoomProps = {
  credentials: CredentialsData;
  roomId: string;
};
