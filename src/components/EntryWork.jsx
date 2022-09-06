//import {Link} from "react-router-dom"

function EntryWork({
  image,
  alt,
  titleProject,
  description,
  tool1,
  tool2,
  tool3,
}) {
  return (
    <div>
      <img className="rounded-lg shadow-xl" src={image} alt={alt} />
      <h1 className="mt-6 text-2xl font-bold leading-tight">{titleProject}</h1>
      <p className="mt-2">{description}</p>

      <div className="mt-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{tool1}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{tool2}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{tool3}
        </span>
      </div>

      <div className="mt-4">
        <button
          className="inline-block px-5 py-3 rounded-lg shadow-lg bg-[#85BFD1] hover:bg-[#9fc7d3] text-sm text-[#FFFFFF] uppercase tracking-wider font-semibold"
          href="#"
        >
          Voir le projet
        </button>
      </div>
    </div>
  );
}

export default EntryWork;
