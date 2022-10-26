import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function Hero({ greeting, name, position, content, cta }) {
  const navigate = useNavigate();

  return (
    <section id="hero" className="w-full h-screen bg-[#171718]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#85BFD1]">{greeting}</p>
        <h1 className="text-3xl sm:text-6xl font-bold text-[#FFFFFF]">
          {name}
        </h1>
        <h2 className="text-2xl sm:text-5xl font-bold text-[#D1D5DB]">
          {position}
        </h2>
        <p className="text-[#D1D5DB] py-4 max-w-[700px]">{content}</p>
        <div>
          <button
            className="inline-block px-5 py-3 rounded-lg shadow-lg bg-[#85BFD1] hover:bg-[#9fc7d3] text-sm text-[#FFFFFF] uppercase tracking-wider font-semibold"
            onClick={() => navigate("/projects")}
          >
            {cta}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

Hero.defaultProps = {
  greeting: "Hello, je suis",
  name: "Jean-Hugues Doumbe Kingue",
  position: "Développeur front-end",
  content:
    "Je crée et développe des sites et applications web dynamiques pour une expérience utilisateur optimale.",
  cta: "Voir mes projets",
};

Hero.propTypes = {
  greeting: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  content: PropTypes.string,
  cta: PropTypes.string,
};
