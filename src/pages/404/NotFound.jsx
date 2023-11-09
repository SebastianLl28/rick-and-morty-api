const NotFound = () => {
  return (
    <main className="min-h-[calc(100vh-112px)] flex justify-center items-center flex-col">
      <section className="flex items-center text-[15rem] md:text-[30em] -space-x-10  md:-space-x-24 leading-none">
        <span className="">4</span>
        <img
          src="/rick-morty-home.webp"
          alt="rick and morty"
          className="w-[15rem] md:w-[30rem] relative z-10 shadow-logo"
        />
        <span className="">4</span>
      </section>
      <footer>
        <p className="text-center text-5xl md:text-6xl">Page not Found</p>
      </footer>
    </main>
  );
};

export default NotFound;
