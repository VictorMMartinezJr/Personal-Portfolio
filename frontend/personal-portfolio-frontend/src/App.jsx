import { ToastContainer } from "react-toastify";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills";
import StarsBackground from "./components/StarsBackground";

function App() {
  return (
    <main
      id="main"
      className="bg-[#02071a] w-full h-auto text-white flex flex-col justify-between items-center overflow-hidden relative"
    >
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
        toastClassName="!shadow-[0_0_20px_rgba(168,85,247,0.6)]"
        progressClassName="!bg-purple-700"
      />
      <StarsBackground />
      <Nav />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
