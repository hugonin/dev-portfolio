import Profil from "../assets/profil_jhdk.jpg";

function About() {
  return (
    <section
      id="about"
      className="card w-full h-screen bg-[#1C1E22] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#85BFD1]">
              A propos
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="mb-1">
              Je suis jean-hugues DOUMBE KINGUE, ingénieur logiciel et
              développeur web indépendant basé à Lyon, France. Curieux et
              toujours en quête de connaissances, je développe des applications
              web pour le plaisir ou pour résoudre des problèmes.{" "}
            </p>
            <p className="mb-1">
              J’occupe un poste de développeur à temps plein au sein d’une ESN
              et je manage en parallèle des projets personels mais aussi des
              projets clients en qualité de freelance. Je trouve que cet
              exercice d'équilibre est extrêmement ingénieux en termes
              d'apprentissage en tant que développeur Web, ainsi que pour suivre
              l'expansion rapide des outils de développement, des bibliothèques,
              des frameworks, etc.
            </p>

            <p className="mb-1">
              Que vous soyez un propriétaire d'entreprise cherchant à démarrer
              un projet de développement d'applications ou de sites Web avec un
              développeur Web indépendant, un développeur cherchant à collaborer
              sur quelque chose de cool, ou voulant simplement dire bonjour,
              envoyez-moi un message et travaillons ensemble.
            </p>
          </div>
          <div className="bg-cover bg-center ">
            <img className="w-full object-cover rounded-md" src={Profil} alt="profil" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
