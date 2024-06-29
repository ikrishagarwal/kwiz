import "./Home.css";
import { ChangeEvent, useState } from "react";

export const Home = ({ returnFormData }: HomeData) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleRadio = (event: ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value);
  };

  return (
    <>
      <section className="flex-grow text-white flex items-center justify-center">
        <section className="h-fit w-fit  bg-kiwi-600 rounded-lg py-8 px-16">
          <h1 className="text-white text-3xl py-4 font-heading text-center">
            Get Started
          </h1>
          <section>
            <form
              action="#"
              onSubmit={(event) => {
                event.preventDefault();

                if (name.trim() === "")
                  return alert("Username can't be empty!");
                if (role === "")
                  return alert("You need to select at least one of the role!");

                returnFormData({
                  username: name,
                  role,
                });
              }}
            >
              <section className="py-4">
                <p className="tracking-wide py-2 text-lg">Username:</p>
                <input
                  className="rounded-lg bg-kiwi-200 text-slate-200 px-6 py-3 font-semibold outline-kiwi-100 focus:outline-1 focus:shadow-none"
                  type="text"
                  placeholder="Krish Morris"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </section>
              <section>
                <p className="tracking-wide py-2 text-lg">Role:</p>
                <section className="flex flex-row justify-between py-4">
                  <section>
                    <input
                      type="radio"
                      className="hidden role-radio"
                      name="role-selection"
                      id="organizer"
                      value="organizer"
                      onChange={handleRadio}
                    />
                    <label htmlFor="organizer">
                      <div className="inline rounded-lg bg-kiwi-200 px-6 py-3 role-radio-label">
                        Organizer
                      </div>
                    </label>
                  </section>
                  <section>
                    <input
                      type="radio"
                      className="hidden role-radio"
                      name="role-selection"
                      id="attendee"
                      value="attendee"
                      onChange={handleRadio}
                    />
                    <label htmlFor="attendee">
                      <div className="inline rounded-lg bg-kiwi-200 px-6 py-3 role-radio-label">
                        Attendee
                      </div>
                    </label>
                  </section>
                </section>
              </section>
              <section className="pt-6">
                <button
                  className="w-full py-3 bg-kiwi-200 rounded-lg"
                  type="submit"
                >
                  Go!
                </button>
              </section>
            </form>
          </section>
        </section>
      </section>
    </>
  );
};

type HomeData = {
  returnFormData: Function;
};
