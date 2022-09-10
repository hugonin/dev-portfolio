import Hero from "../routes/Hero";
import About from "../routes/About";
import Skills from "../routes/Skills";
import ProjectList from "../components/ProjectList";
import Contact from "../routes/Contact";

function Home() {
  return (
    <div id="home">
      <Hero />
      <About />
      <Skills />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default Home;
