export const Home = () => {
  return (
    <>
      <section className="h-full text-white flex items-center justify-center">
        <section className="h-fit w-fit  bg-kiwi-600 rounded-lg p-8">
          <h1 className="text-white text-3xl font-heading">Get Started</h1>
          <section>
            <section className="py-4">
              <p className="tracking-wide py-2 text-lg">Username:</p>
              <input
                className="rounded-lg bg-kiwi-200 text-kiwi-100 px-6 py-3 font-semibold outline-kiwi-100 focus:outline-1 focus:shadow-none"
                type="text"
                placeholder="Krish Morris"
              />
            </section>
          </section>
        </section>
      </section>
    </>
  );
};
