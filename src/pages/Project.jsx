import { useParams, Link } from "react-router-dom";
import ProjectData from "../data/projectsData";

function Project() {
  const { id } = useParams();
  const project = ProjectData[id];
  const { tools, title, image, description, relatedProjects, links, content } =
    project;
  return (
    <section className="pt-24 pb-40 lg:pt-40 lg:pb-40 flex justify-center bg-[#171718]">
      <article className="max-w-screen-xl lg:mx-8">
        <div className="text-center">
          <span className=" font-semibold bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">
            {tools.tool1}
          </span>
          <span className=" font-semibold bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">
            {tools.tool2}
          </span>
          <span className=" font-semibold bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">
            {tools.tool3}
          </span>
        </div>
        <h1 className="text-2xl lg:text-4xl text-center mx-4 mt-2 lg:mx-0 text-[#FFFFFF]">
          {title}
        </h1>
        <div className="h-72 lg:h-1/3 w-full lg:px-16 mt-12 mb-12 lg:mb-16">
          <img
            className="h-full w-full object-cover"
            src={image}
            alt="An open notebook with a coffee cup on a desk."
          />
        </div>
        <div className="max-w-prose mx-6 lg:mx-auto text-[#D1D5DB]">
          <p className="mb-4 text-lg lg:text-xl font-semibold">{description}</p>
          <a href={links.code} target="_blank" rel="noreferrer">
            <button className="inline-block mb-4 px-5 py-3 rounded-lg  bg-[#85BFD1] hover:bg-[#9fc7d3] text-sm text-[#FFFFFF] uppercase tracking-wider font-semibold">
              Code
            </button>
          </a>
          <a href={links.live} target="_blank" rel="noreferrer">
            <button className="inline-block mb-4 ml-2 px-5 py-3 rounded-lg  bg-[#85BFD1] hover:bg-[#9fc7d3] text-sm text-[#FFFFFF] uppercase tracking-wider font-semibold">
              Live
            </button>
          </a>

          <h2 className="text-xl lg:text-2xl mt-6 mb-4 text-[#D1D5DB]">
            But et objectifs du projet
          </h2>
          <p className="mb-4">{content.goal}</p>

          <h2 className="text-xl lg:text-2xl mt-12 mb-4 text-[#D1D5DB]">
            Choix de la stack
          </h2>
          <p className="mb-4">{content.choice}</p>

          <h2 className="text-xl lg:text-2xl mt-12 mb-4 text-[#D1D5DB]">
            Probl??mes et r??solutions
          </h2>
          <p className="mb-4">{content.problems}</p>

          <h2 className="text-xl lg:text-2xl mt-12 mb-4 text-[#D1D5DB]">
            Retour d'exp??rience
          </h2>
          <p className="mb-4">{content.exp}</p>
        </div>

        <h2 className="text-xl lg:text-3xl mt-12 mb-4 m-3 text-[#D1D5DB]">
          Autres projets
        </h2>

        <div className=" relative flex flex-row gap-1 md:mb-36  ">
          <div className="composite_deck relative h-96 flex-grow-1 w-full">
            <Link to={relatedProjects.link1}>
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 transition-opacity duration-500 hover:opacity-20 cursor-pointer z-10">
                <img
                  className="h-full w-full object-cover"
                  src={relatedProjects.image1}
                  alt="An open notebook with a coffee cup on a desk."
                />
              </div>
              <h2 className="absolute uppercase pl-4 lg:pl-10 pb-2 lg:pb-8 bottom-0 font-medium text-lg lg:text-xl text-gray-100 z-20">
                {relatedProjects.title1}
              </h2>
            </Link>
          </div>

          <div className="hardwood_deck relative h-96 flex-grow-1 w-full">
            <Link to={relatedProjects.link2}>
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 transition-opacity duration-500 hover:opacity-20 cursor-pointer z-10">
                <img
                  className="h-full w-full object-cover"
                  src={relatedProjects.image2}
                  alt="An open notebook with a coffee cup on a desk."
                />
              </div>
              <h2 className="absolute uppercase pl-4 lg:pl-10 pb-2 lg:pb-8  bottom-0 font-medium text-lg lg:text-xl text-gray-100 z-20">
                {relatedProjects.title2}
              </h2>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Project;
