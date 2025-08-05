import "./App.css";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills";
import Spotlight from "./components/Spotlight";
import StarsBackground from "./components/StarsBackground";

function App() {
  return (
    <main className="bg-black w-full h-auto text-white flex flex-col justify-between items-center overflow-x-hidden relative">
      <StarsBackground />
      <Spotlight position={"0%"} />
      <Spotlight position={"80%"} rotate={"15deg"} />

      <Nav />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
    </main>
  );
}

export default App;
