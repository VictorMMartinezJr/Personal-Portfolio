import navaid from "../../assets/navaid.png";
import echosphere from "../../assets/echosphere.png";
import luxureDetails from "../../assets/luxuredetails.png";
import nexa from "../../assets/nexa.png";

const appsData = [
  {
    name: "EchoSphere",
    skills: [
      "React",
      "TailwindCSS",
      "Context API",
      "Cloudinary",
      "Java",
      "Springboot",
      "MongoDB",
      "Netlify",
      "Render",
    ],
    imgSrc: echosphere,
    description:
      "A full-stack music streaming web app built with React, TailwindCSS, Spring Boot, and MongoDB. Users can browse songs, play music, create accounts, and enjoy a clean, responsive UI. Includes secure JWT authentication, dynamic routing, and real-time audio playback. Features a full Admin Dashboard where authorized users can upload new tracks, edit metadata, and manage the entire music catalog.",
    disclaimer:
      "🚀 Note: This application is hosted on a free-tier cloud instance. Please allow 45-60 seconds for the server to 'spin up' on your first visit. Thank you for your patience!",
    GitHub: "https://github.com/VictorMMartinezJr/EchoSphere",
    demoLink: "https://echosphere-user.netlify.app",
  },
  {
    name: "Nexa",
    skills: [
      "React",
      "TailwindCSS",
      "Context API",
      "Cloudinary",
      "Java",
      "Springboot",
      "MySQL",
      "Netlify",
      "Aiven",
      "Render",
    ],
    imgSrc: nexa,
    description:
      "A full-stack cloud-native e-commerce platform built with React, Tailwind CSS, Spring Boot, and MySQL. Architected with a strictly typed relational schema hosted on Aiven Cloud, Nexa provides a high-performance retail experience with real-time inventory tracking and dynamic category filtering. Features secure JWT authentication for user sessions and a robust backend logic for managing complex product variants. Deployed using a decoupled architecture on Render and Netlify, ensuring 100% data integrity and scalable asset management via Cloudinary.",
    disclaimer:
      "🚀 Note: This application is hosted on a free-tier cloud instance. Please allow 45-60 seconds for the server to 'spin up' on your first visit. Thank you for your patience!",
    GitHub: "https://github.com/VictorMMartinezJr/Nexa",
    demoLink: "https://nexaapparel.netlify.app",
  },
  {
    name: "NavAid",
    skills: [
      "React",
      "React-Konva",
      "TailwindCSS",
      "Context API",
      "Dijkstra's Algorithm",
      "Framer Motion",
      "Netlify",
    ],
    imgSrc: navaid,
    description:
      "An indoor navigation web app that helps students and visitors find the fastest route to any room in Building A at Gwinnett Tech. Built an interactive map canvas, real-time Dijkstra pathfinding, search, and dynamic coordinate scaling for accurate navigation. Developed in collaboration with the Computer Science department at my college, and the project led to being invited as a co-founder of a new student innovation/programming club.",
    GitHub: "https://github.com/VictorMMartinezJr/Personal-Portfolio",
    demoLink: "https://navaid-v1.netlify.app",
  },
];

const landingPagesData = [
  {
    name: "Luxure Details",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "TailwindCSS",
      "Responsive UI",
      "Netlify",
    ],
    imgSrc: luxureDetails,
    description:
      "A landing page for a luxury car detailing brand. Fully responsive for all devices and optimized images.",
    GitHub: "https://github.com/VictorMMartinezJr/LuxureDetails",
    demoLink: "https://luxuredetails-v1.netlify.app",
  },
];

export { appsData, landingPagesData };
