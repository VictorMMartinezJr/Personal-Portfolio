import "./App.css";
import Nav from "./components/Nav";
import Spotlight from "./components/Spotlight";
import StarsBackground from "./components/StarsBackground";

function App() {
  return (
    <main className="bg-black w-full h-[100vh] text-white flex flex-col justify-between items-center">
      <StarsBackground />
      <Spotlight />
      <Nav />
      <h1>My Portfolio</h1>
    </main>
  );
}

export default App;
