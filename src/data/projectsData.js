import image0 from "../assets/eval-app.png";
import image1 from "../assets/blog-app-homepage.png";
import image2 from "../assets/portfolio-website.png";

const ProjectData = [
  {
    id: 0,
    title: "News Article Evaluation",
    description:
      "Outil web d'analyse d'articles",
    image: image0,
    alt: "app",
    tools: {
      tool1: "Node",
      tool2: "Express",
      tool3: "API",
    },
    links: {
      code: "https://github.com/hugonin/news-article-evaluation",
      live: "https://murmuring-crag-39577.herokuapp.com/"
    },
    content: {
      goal: "Le but de ce projet est de permettre aux utilisateurs d'avoir des informations pertinentes sur les articles de blogs qu'ils consultent sur le net. En soumettant l'url d'un article dans le champ dédié de l'application, on obtient des résultats sur la qualité du contenu (objectif ou subjectif) et la tonalité (positif, neutre ou négatif)  ",
      choice: "Mon choix de technologies pour ce projet s'est porté sur Node, Express, Node Fetch, un module léger pour faire des appels à l'API avec Node, et Sentiment Analysis API de MeaningCloud pour interagir avec le système de traitement automatique de langue naturelle (NLP). Pour le design, je me suis appuyé sur du HTML et CSS, avec EJS pour le templating. ",
      problems: "Parmi les difficultés rencontrées dans ce projet: l'usage de Node Fetch et la sécurisation de la clé API. En me documentant, j'ai pu en savoir plus sur Node Fetch, quant à la sécurisation de la clé API, j'ai opté pour une architecture qui sépare le côté serveur du côté client le choix du serveur Express, et mis en place les variables d'environnement non accessibles du côté client.",
      exp: "Ce projet m'a permis de solidifier mes connaissances sur Express, savoir comment protégér une clé API et comment faire des appels à un API"
    },
    relatedProjects: {
      link1: "/projects/1",
      link2: "/projects/2",
      title1: "Blog App",
      title2: "Portfolio Website Marketing",
      image1: image1,
      image2: image2,
    },
  },
  {
    id: 1,
    title: "Blog App",
    description:
      "Plateforme de blogging",
    image: image1,
    alt: "app",
    tools: {
      tool1: "Express",
      tool2: "Mongo DB",
      tool3: "React",
    },
    links: {
      code: "https://github.com/hugonin/blog-app",
      live: "https://hugoninblogapp.herokuapp.com/"
    },
    content: {
      goal: "Le but de ce projet est de permettre aux utilisateurs inscrits de créer des articles et de les visualiser sous la forme d'un blog. L'objectif ici est de créer une application fullstack, avec authentification et usage d'une base de données",
      choice: "Mon choix pour ce projet s'est porté sur une stack MERN, composée de MongoDB, Express, React et Nodejs. J'utilise la bibliothèque Mongoose pour créer la connexion entre MongoDB et l'environnement d'execution Nodejs. Pour l'authentification, j'ai utilisé le JSON Web Token. Le design est réalisé avec Tailwind CSS",
      problems: "Les problèmes rencontrés ont été au niveau de la mise en place de l'architecture, savoir comment implémenter redux pour la gestion des états, la gestion de l'authentification, et le déploiement de l'application. Pour repondre aux problèmes posés par le projet, j'ai du me documenter, faire des tests du serveur sur Postman, installer le module Redux DevTools pour le debug des changements d'états",
      exp: "Projet complexe mais gratifiant qui m'a permis de monter en compétences sur redux, le routage, l'authentification. L'application est fonctionnelle, les formulaires de login et d'inscription sont sécurisés,  on peut créer des articles et les visualiser. Les prochaines fonctionnalités à développer sont celles de la mise à jour des articles et leur partage sur les réseaux sociaux  "
    },
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
      "Site portfolio multi section",
    image: image2,
    alt: "app",
    tools: {
      tool1: "React",
      tool2: "Gatsby",
      tool3: "Tailwind CSS",
    },
    links: {
      code: "https://github.com/hugonin/gatsby-portfolio-website",
      live: "https://gatsbyportfoliowebsitemain.gatsbyjs.io/"
    },
    content: {
      goal: "Le but de ce projet est de réaliser un site portfolio de marketing utile pour mettre en valeur les activités d'une entreprise.",
      choice: "Mon choix des technologies pour ce projet s'est porté sur le framework Gatsby basé sur React et le framework CSS open source Tailwind",
      problems: "Les problèmes rencontrés pour ce projet sont essentiellement liés à la prise en main de Gatsby. La documentation bien fournie de Gatsby m'a aidé à trouver les olutions à mes problèmes ",
      exp: "Ce projet constitue une aperçu de ma capacité à prendre en main de nouveaux frameworks. Le site est fonctionnel, avec un design responsive. ", 
    },
    relatedProjects: {
      link1: "/projects/0",
      link2: "/projects/1",
      title1: "News Article Evaluation",
      title2: "Blog App",
      image1: image0,
      image2: image1,
    },
  },
];

export default ProjectData;
