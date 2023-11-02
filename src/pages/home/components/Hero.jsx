const Hero = () => {
  return (
    <section className="w-full grid items-start content-start gap-y-10 container mx-auto px-4 py-10 xl:grid-cols-2 xl:gap-44 xl:items-center">
      <div className="grid content-center gap-5 text-center xl:text-start">
        <h1 className="text-4xl md:text-6xl font-bold">Rick and Morty</h1>
        <p className="text-sm md:text-lg">
          Serie de televisión estadounidense que sigue las desventuras de un
          científico, Rick Sánchez, y su fácilmente influenciable nieto, Morty,
          quienes pasan el tiempo entre la vida doméstica y los viajes
          espaciales, temporales e intergalácticos.
        </p>
      </div>
      <img
        src="/rick-morty-hero.webp"
        alt="rick and morty"
        className="shadow-logo m-auto"
      />
    </section>
  );
};

export default Hero;
