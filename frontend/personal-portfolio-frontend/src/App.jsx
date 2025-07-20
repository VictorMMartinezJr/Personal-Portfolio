import "./App.css";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Spotlight from "./components/Spotlight";
import StarsBackground from "./components/StarsBackground";

function App() {
  return (
    <main className="bg-black w-full h-auto text-white flex flex-col justify-between items-center">
      <StarsBackground />
      <Spotlight />
      <Nav />
      <Hero />
      <AboutMe />
    </main>
  );
}

export default App;
