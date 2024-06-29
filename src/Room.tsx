export const Room = ({}: RoomProps) => {
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
              }}
            >
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

type RoomProps = {
  roomCallback: Function;
};
