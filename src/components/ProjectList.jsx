import { Link } from "react-router-dom";
import ProjectData from "../data/projectsData";

function ProjectList() {
  return (
    <section
      id="projects"
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
          {ProjectData.map((projectItem) => (
            <div key={projectItem.id}>
              <img
                className="rounded-lg shadow-xl"
                src={projectItem.image}
                alt={projectItem.alt}
              />
              <h1 className="mt-6 text-2xl font-bold leading-tight">
                {projectItem.title}
              </h1>
              <p className="mt-2">{projectItem.description}</p>

              <div className="mt-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{projectItem.tools.tool1}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{projectItem.tools.tool2}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{projectItem.tools.tool3}
                </span>
              </div>

              <div className="mt-4">
                <button className="inline-block px-5 py-3 rounded-lg shadow-lg bg-[#85BFD1] hover:bg-[#9fc7d3] text-sm text-[#FFFFFF] uppercase tracking-wider font-semibold">
                  <Link to={`/projects/${projectItem.id}`}>
                    {" "}
                    Voir le projet
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectList;
