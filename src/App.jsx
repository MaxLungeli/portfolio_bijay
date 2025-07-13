import About from "./components/about/About";
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
    </div>
  );
}

export default App;
