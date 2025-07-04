import "./App.css";
import Spotlight from "./components/Spotlight";
import StarsBackground from "./components/StarsBackground";

function App() {
  return (
    <main className="bg-black w-full h-[100vh] text-white flex justify-center items-center">
      <StarsBackground />
      <Spotlight />
      <h1>My Portfolio</h1>
    </main>
  );
}

export default App;
