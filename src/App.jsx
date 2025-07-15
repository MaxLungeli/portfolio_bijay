import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes> */}

      {/* <Footer /> */}
    </div>
  );
}

export default App;
