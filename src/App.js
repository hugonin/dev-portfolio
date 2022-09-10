import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Hero from "./routes/Hero";
import About from "./routes/About";
import Skills from "./routes/Skills";
import Contact from "./routes/Contact";
import ProjectList from "./components/ProjectList";
import Project from "./pages/Project";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/:id/*" element={<Project />} />

          <Route path="contact" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
