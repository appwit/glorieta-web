function Hero() {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(236, 223, 199, 0.5), rgba(47, 60, 113, .8)), url('/img/hero-cover.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="h-screen relative flex flex-col items-center justify-center"
    >
      <div className="container">
        <div className="w-full max-w-[600px] mx-auto text-center text-white">
          <h1 className="text-3xl font-bold underline">Logo</h1>
          <h3 className="text-3xl font-bold italic">
            BÉLGICA #720 COL. PORTALES SUR, ALCALDÍA BENITO JUÁREZ, C.P. 03300
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Hero;
