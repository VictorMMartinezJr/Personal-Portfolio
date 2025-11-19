import navaid from "../../assets/navaid.png";
import echosphere from "../../assets/echosphere.png";
export const projectsData = [
  {
    name: "NavAid",
    skills: [
      "React",
      "React-Konva",
      "TailwindCSS",
      "Context API",
      "Dijkstra's Algorithm",
      "Framer Motion",
    ],
    imgSrc: navaid,
    description:
      "An indoor navigation web app that helps students and visitors find the fastest route to any room in Building A at Gwinnett Tech. Built an interactive map canvas, real-time Dijkstra pathfinding, search, and dynamic coordinate scaling for accurate navigation. Developed in collaboration with the Computer Science department at my college, and the project led to being invited as a co-founder of a new student innovation/programming club.",
    GitHub: "https://github.com/VictorMMartinezJr/Personal-Portfolio",
    demoLink: "https://navaid-v1.netlify.app",
  },
  {
    name: "EchoSphere",
    skills: [
      "React",
      "TailwindCSS",
      "Context API",
      "Java",
      "Springboot",
      "MongoDB",
    ],
    imgSrc: echosphere,
    description:
      "A full-stack music streaming web app built with React, TailwindCSS, Spring Boot, and MongoDB. Users can browse songs, play music, create accounts, and enjoy a clean, responsive UI. Includes secure JWT authentication, dynamic routing, and real-time audio playback. Features a full Admin Dashboard where authorized users can upload new tracks, edit metadata, and manage the entire music catalog.",
    GitHub: "https://github.com/VictorMMartinezJr/EchoSphere",
    demoLink: "https://echosphere-user.netlify.app",
  },
];
