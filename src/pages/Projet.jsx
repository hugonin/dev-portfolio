import imageProjet from "../assets/NLP_app.png";

function Projet() {
  return (
    <section className="pt-24 pb-40 lg:pt-40 lg:pb-40 flex justify-center bg-[#171718]">
      <article className="max-w-screen-xl lg:mx-8">
        <div className="text-center">
          <span className="uppercase font-semibold text-[#FFFFFF] mx-2 text-xs">
            Node JS
          </span>
          <span className="uppercase font-semibold text-[#FFFFFF] mx-2 text-xs">
            Express
          </span>
          <span className="uppercase font-semibold text-[#FFFFFF] mx-2 text-xs">
            API
          </span>
        </div>
        <h1 className="text-2xl lg:text-4xl text-center mx-4 lg:mx-0 text-[#FFFFFF]">
          Evaluate news article app
        </h1>
        <div className="h-72 lg:h-1/3 w-full lg:px-16 mt-12 mb-12 lg:mb-16">
          <img
            className="h-full w-full object-cover"
            src={imageProjet}
            alt="An open notebook with a coffee cup on a desk."
          />
        </div>
        <div className="max-w-prose mx-6 lg:mx-auto text-[#D1D5DB]">
          <p className="mb-4 text-lg lg:text-xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            eligendi libero sit nihil tempora, totam reprehenderit aliquam
            beatae obcaecati ratione. Libero consequatur cumque magnam ipsam
            quae sequi laudantium pariatur veritatis? Totam reprehenderit
            aliquame.
          </p>
          <button
            className="inline-block mb-4 px-5 py-3 rounded-lg  bg-[#85BFD1] hover:bg-[#9fc7d3] text-sm text-[#FFFFFF] uppercase tracking-wider font-semibold"
            href="#"
          >
            Code
          </button>
          <button
            className="inline-block mb-4 ml-2 px-5 py-3 rounded-lg  bg-[#85BFD1] hover:bg-[#9fc7d3] text-sm text-[#FFFFFF] uppercase tracking-wider font-semibold"
            href="#"
          >
            Live
          </button>

          <h2 className="text-xl lg:text-2xl mt-6 mb-4 text-[#D1D5DB]">
            But et objectifs du projet
          </h2>
          <p className="mb-4">
            Nunc dictum nec tellus nec hendrerit. Etiam leo felis, congue vitae
            placerat vel, vestibulum id massa. Maecenas cursus, ante sit amet
            placerat rhoncus, risus est auctor diam, in pulvinar magna lectus at
            erat.
          </p>

          <h2 className="text-xl lg:text-2xl mt-12 mb-4 text-[#D1D5DB]">
            Choix de la stack
          </h2>
          <p className="mb-4">
            Nunc dictum nec tellus nec hendrerit. Etiam leo felis, congue vitae
            placerat vel, vestibulum id massa. Maecenas cursus, ante sit amet
            placerat rhoncus, risus est auctor diam, in pulvinar magna lectus at
            erat.
          </p>
          <p className="mb-4">
            Nullam eget neque tellus. In tellus odio, pretium ac risus vitae,
            bibendum dignissim lectus. Vestibulum hendrerit libero nec mauris
            feugiat vehicula. Duis malesuada diam tempor odio efficitur, vitae
            faucibus purus ornare.
          </p>

          <h2 className="text-xl lg:text-2xl mt-12 mb-4 text-[#D1D5DB]">
            Problèmes et résolutions
          </h2>
          <p className="mb-4">
            Nunc dictum nec tellus nec hendrerit. Etiam leo felis, congue vitae
            placerat vel, vestibulum id massa. Maecenas cursus, ante sit amet
            placerat rhoncus, risus est auctor diam, in pulvinar magna lectus at
            erat.
          </p>
          <p className="mb-4">
            Nullam eget neque tellus. In tellus odio, pretium ac risus vitae,
            bibendum dignissim lectus. Vestibulum hendrerit libero nec mauris
            feugiat vehicula. Duis malesuada diam tempor odio efficitur, vitae
            faucibus purus ornare.
          </p>

          <h2 className="text-xl lg:text-2xl mt-12 mb-4 text-[#D1D5DB]">
            Retour d'expérience
          </h2>
          <p className="mb-4">
            Nullam eget neque tellus. In tellus odio, pretium ac risus vitae,
            bibendum dignissim lectus. Vestibulum hendrerit libero nec mauris
            feugiat vehicula. Duis malesuada diam tempor odio efficitur, vitae
            faucibus purus ornare.
          </p>
        </div>

        <h2 className="text-xl lg:text-3xl mt-12 mb-4 m-3 text-[#D1D5DB]">
          Autres projets
        </h2>

        <div className=" relative flex flex-row gap-1 md:mb-36  ">
          <div class="composite_deck relative h-96 flex-grow-1 w-full">
            <a href="/composite_decks.html">
              <div class="absolute top-0 left-0 w-full h-full bg-black opacity-60 transition-opacity duration-500 hover:opacity-20 cursor-pointer z-10"></div>
              <h2 class="absolute uppercase pl-4 lg:pl-10 pb-2 lg:pb-8 bottom-0 font-medium text-lg lg:text-xl text-gray-100 z-20">
                Portfolio Website Marketing
              </h2>
            </a>
          </div>

          <div class="hardwood_deck relative h-96 flex-grow-1 w-full">
            <a href="/hardwood_decks.html">
              <div class="absolute top-0 left-0 w-full h-full bg-black opacity-60 transition-opacity duration-500 hover:opacity-20 cursor-pointer z-10"></div>
              <h2 class="absolute uppercase pl-4 lg:pl-10 pb-2 lg:pb-8  bottom-0 font-medium text-lg lg:text-xl text-gray-100 z-20">
                Travel App
              </h2>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Projet;
