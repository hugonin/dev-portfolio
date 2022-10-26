import PropTypes from "prop-types"

import Profil from "../assets/profil_dev_jhdk_3.jpg";

function About({title, paragraph1, paragraph2, paragraph3, paragraph4, paragraph5}) {
  return (
    <section id="about" className=" bg-[#1C1E22] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-12">
          <div className=" pt-20 pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#85BFD1] ">
              {title}
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-12 px-4">
          <div>
            <p className="mb-2">
             {paragraph1}
            </p>
            <p className="mb-2">
            {paragraph2}
            </p>

            <p className="mb-2">
             {paragraph3} 
            </p>
            <p className="mb-2">
           {paragraph4}
            </p>
            <p className="mb-2">
           {paragraph5}
            </p>
          </div>
          <div className="bg-cover bg-center pb-16 ">
            <img
              className="h-full w-full object-cover rounded-md"
              src={Profil}
              alt="profil"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;


About.defaultProps = {
  title: "A propos",
  paragraph1: "Je suis jean-hugues DOUMBE KINGUE, développeur web basé à Lyon,France. Curieux et motivé par l'apprentissage de nouvelles technologies, je prends du plaisir à créer et développer des applications et sites web dynamiques pour une expérience utilisateur optimale.",
  paragraph2: "Mon intérêt pour la programmation remonte au début des années 90 et mes premiers pas avec BASIC. Mais ce n'est que bien plus tard en reprise d'études, que j'ai commencé à coder les micro-contrôleurs avec le langage C. Il s'ensuit une carrière d'automaticien, avec LabView comme outil de travail, pour réaliser des interfaces homme-machine. Je me rends compte à partir de ce moment que j'aime développer des applications au service de l'utilisateur.",
  paragraph3: "Au début des années 2000, je commence à m'intéresser au développement web et je me mets à apprendre de manière autodidacte le HTML, CSS , PHP et Javascript. Entre cours en ligne et divers projets personnels, j'ai pu monter en compétences dans les technologies du web",
  paragraph4: "J'ai aussi un diplôme d'ingénieur généraliste, et plus récemment j'ai achevé une alternance d'un an et demi, visant un titre de manager de projets informatiques.",
  paragraph5: "Actuellement, je suis disponible et prêt à intervenir sur des projets innovants. Envoyez-moi un message et travaillons ensemble!"

}

About.propTypes = {
  title: PropTypes.string,
  paragraph1: PropTypes.string,
  paragraph2: PropTypes.string,
  paragraph3: PropTypes.string,
  paragraph4: PropTypes.string

}