import image0 from "../assets/NLP_app.png";
import image1 from "../assets/quote-genrator-app.png";
import image2 from "../assets/header-website-marketing.jpg";

const ProjectData = [
  {
    id: 0,
    title: "News Article Evaluation",
    description:
      "Outil web qui permet aux utilisateurs de traiter automatiquement le langage textuel d'articles ou d'articles blogs trouvés sur d'autres site web",
    image: image0,
    alt: "app",
    tools: {
      tool1: "Node",
      tool2: "Express",
      tool3: "API",
    },
    relatedProjects: {
      link1: "/projects/1",
      link2: "/projects/2",
      title1: "Quote Generator App",
      title2: "Portfolio Website Marketing",
      image1: image1,
      image2: image2,
    },
  },
  {
    id: 1,
    title: "Quote Generator App",
    description:
      "Outil web qui permet aux utilisateurs de traiter automatiquement le langage textuel d'articles ou d'articles blogs trouvés sur d'autres site web",
    image: image1,
    alt: "app",
    tools: {
      tool1: "Node",
      tool2: "Express",
      tool3: "API",
    },
    // related1: "/projects/0",
    // related2: "/projects/2",
    // titleRelated1: "News Article Evaluation",
    // titleRelated2: "Portfolio Website Marketing",
    // imageRelated1: image0,
    // imageRelated2: image2,
    relatedProjects: {
      link1: "/projects/0",
      link2: "/projects/2",
      title1: "News Article Evaluation",
      title2: "Portfolio Website Marketing",
      image1: image0,
      image2: image2,
    },
  },
  {
    id: 2,
    title: "Portfolio Website Marketing",
    description:
      "Outil web qui permet aux utilisateurs de traiter automatiquement le langage textuel d'articles ou d'articles blogs trouvés sur d'autres site web",
    image: image2,
    alt: "app",
    tools: {
      tool1: "Node",
      tool2: "Express",
      tool3: "API",
    },
    // related1: "/projects/0",
    // related2: "/projects/1",
    // titleRelated1: "News Article Evaluation",
    // titleRelated2: "Quote Generator App",
    // imageRelated1: image0,
    // imageRelated2: image2,
    relatedProjects: {
      link1: "/projects/0",
      link2: "/projects/1",
      title1: "News Article Evaluation",
      title2: "Quote Generator App",
      image1: image0,
      image2: image1,
    },
  },
];

export default ProjectData;
