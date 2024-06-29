import "./Home.css";

export const Home = () => {
  return (
    <>
      <section className="h-full text-white flex items-center justify-center">
        <section className="h-fit w-fit  bg-kiwi-600 rounded-lg py-8 px-16">
          <h1 className="text-white text-3xl py-4 font-heading">Get Started</h1>
          <section>
            <section className="py-4">
              <p className="tracking-wide py-2 text-lg">Username:</p>
              <input
                className="rounded-lg bg-kiwi-200 text-kiwi-100 px-6 py-3 font-semibold outline-kiwi-100 focus:outline-1 focus:shadow-none"
                type="text"
                placeholder="Krish Morris"
              />
            </section>
            <section className="py-4">
              <p className="tracking-wide py-2 text-lg">Role:</p>
              <form action="#" className="flex flex-row justify-between py-4">
                <p>
                  <input
                    type="radio"
                    className="hidden role-radio"
                    name="role-selection"
                    id="organizer"
                  />
                  <label htmlFor="organizer">
                    <div className="inline rounded-lg bg-kiwi-200 px-6 py-3 role-radio-label">
                      Organizer
                    </div>
                  </label>
                </p>
                <p>
                  <input
                    type="radio"
                    className="hidden role-radio"
                    name="role-selection"
                    id="attendee"
                  />
                  <label htmlFor="attendee">
                    <div className="inline rounded-lg bg-kiwi-200 px-6 py-3 role-radio-label">
                      Attendee
                    </div>
                  </label>
                </p>
              </form>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};
