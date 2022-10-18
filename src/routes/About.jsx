import PropTypes from "prop-types"

import Profil from "../assets/profil_dev_jhdk_3.jpg";

function About({title, paragraph1, paragraph2, paragraph3, paragraph4}) {
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
  paragraph1: "Je suis jean-hugues DOUMBE KINGUE, développeur web basé à Lyon,France. Curieux et toujours en quête de connaissances, je développe des applications web pour le plaisir ou pour résoudre des problèmes.",
  paragraph2: "Mon intérêt pour la programmation remonte au début des années 90 et mes premiers pas avec BASIC. Mais ce n'est que bien plus tard en reprise d'études en licence professionelle d'automatique et informatique industrielle, que j'ai commencé à coder les micro-contrôleurs avec Visual Basic et le Langage C. Ce qui m'a amené dans un premier temps vers une carrière de technicien dans les systèmes automatisés et de contrôle-commande. Je découvre alors des langages de programmation visuelle comme LabView pour réaliser des interfaces homme-machine et je me rends compte que j'aime développer des applications avec des expériences utilisateur de qualité. Au début des années 2000, je commence à m'interesser au développement web et je me mets à apprendre le HTML, CSS et PHP, en contribuant à des petits projets web réalisés entre amis. Depuis cette période, je ne cesse de monter en compétences.",
  paragraph3: "Je suis titulaire d'un diplôme d'ingénieur généraliste, et plus récemment j'ai achevé une alternance d'un an visant un titre de manager de projets informatiques. Actuellement, je suis disponible et prêt à intervenir dans le cadre d'un contrat longue durée ou en freelance sur des projets innovants autour de l'expérience client. ",
  paragraph4: " Envoyez-moi un message et travaillons ensemble!"

}

About.propTypes = {
  title: PropTypes.string,
  paragraph1: PropTypes.string,
  paragraph2: PropTypes.string,
  paragraph3: PropTypes.string,
  paragraph4: PropTypes.string

}