import EntryWork from "../components/EntryWork";
import Projects_Data from "../data/projects-data";

function Work() {
  return (
    <section
      id="work"
      className="w-full md:h-screen text-gray-300 bg-[#1C1E22]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#85BFD1]">
            Projets
          </p>
          <p className="py-6">
            Le moyen le plus sûr pour moi de monter en compétences est de
            pouvoir coder en permanence. Jetez un oeil à cette sélection de
            projets sur lesquels j'ai eu à passer mon temps
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Projects_Data.map((projectItem) => (
            <EntryWork
              key={projectItem.id}
              image={projectItem.image}
              alt={projectItem.alt}
              titleProject={projectItem.titleProject}
              description={projectItem.description}
              url={projectItem.url}
              tool1={projectItem.tool1}
              tool2={projectItem.tool2}
              tool3={projectItem.tool3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
