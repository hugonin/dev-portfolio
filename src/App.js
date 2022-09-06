import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projet from "./pages/Projet";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projet1" element={<Projet />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
