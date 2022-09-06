import { Link } from "react-scroll";

function Hero() {
  return (
    <section id="hero" className="w-full h-screen bg-[#171718]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#85BFD1]">Hello, je suis</p>
        <h1 className="text-3xl sm:text-6xl font-bold text-[#FFFFFF]">
          Jean-Hugues Doumbe Kingue
        </h1>
        <h2 className="text-2xl sm:text-5xl font-bold text-[#D1D5DB]">
          Développeur
        </h2>
        <p className="text-[#D1D5DB] py-4 max-w-[700px]">
          Je suis un développeur front-end qui crée et designe des sites et
          applications web, agréables à utilser mais aussi dont le code est
          maintenable et facile à comprendre.
        </p>
        <div>
          <Link to="work" smooth={true}>
            <button
              className="inline-block px-5 py-3 rounded-lg shadow-lg bg-[#85BFD1] hover:bg-[#9fc7d3] text-sm text-[#FFFFFF] uppercase tracking-wider font-semibold"
              href="#"
            >
              Voir mes projets
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
