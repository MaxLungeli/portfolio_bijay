import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
