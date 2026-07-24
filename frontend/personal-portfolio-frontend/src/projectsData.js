import nasaTableau from "./assets/nasa-tableau.png";
import nasaLogo from "./assets/nasa-logo.svg";
import coffeeLogo from "./assets/coffee-logo.svg";
import walmartLogo from "./assets/walmart-logo.svg";
import spotifyLogo from "./assets/spotify-logo.svg";
const dataAnalyticsData = [
  {
    name: "NASA Near Earth Object Analytics",
    skills: [
      "Python",
      "PostgreSQL",
      "SQL",
      "Tableau",
      "REST API",
      "Pandas",
      "SQLAlchemy",
      "ETL Pipeline",
    ],
    logo: nasaLogo,
    imgSrc: nasaTableau,
    description:
      "An automated end-to-end data pipeline and interactive analytics dashboard processing live space telemetry from NASA's REST API.\n\nKey Highlights:\n• Built a Python ETL pipeline using Requests & Pandas to ingest, clean, and normalize asteroid tracking data.\n• Designed a PostgreSQL schema using SQLAlchemy, executing complex SQL queries with CTEs & Window Functions (DENSE_RANK) to calculate daily velocity trends, hazard ratios, and Lunar Distance proximity metrics.\n• Developed a dual-layout interactive Tableau Dashboard with custom collapsible filter menus and KPI summaries for stakeholders.",
    GitHub: "https://github.com/VictorMMartinezJr/nasa_neows_analysis",
    demoLink:
      "https://public.tableau.com/views/NASANeo/NEODashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  },
  {
    name: "Walmart Sales & Revenue Analytics",
    skills: [
      "Python",
      "PostgreSQL",
      "SQL",
      "Pandas",
      "SQLAlchemy",
      "Kaggle API",
      "Data Cleaning",
      "Business Intelligence",
    ],
    logo: walmartLogo,
    imgSrc: "",
    description:
      "An end-to-end data processing and SQL analytics project analyzing 10k+ Walmart sales transactions to uncover revenue trends and operational insights.\n\nKey Highlights:\n• Built an automated ingestion pipeline in Python utilizing the Kaggle API and Pandas to extract, clean, and engineer transaction-level features (e.g., Total Price, profit margins).\n• Architected a PostgreSQL database using SQLAlchemy to stage and query normalized sales records.\n• Executed complex SQL analytical queries employing CTEs, Window Functions (DENSE_RANK), and conditional aggregation to identify branch peak sales periods, year-over-year revenue decline ratios, and shift performance metrics.",
    GitHub: "https://github.com/VictorMMartinezJr/python_sql_walmart",
    demoLink: "",
  },
  {
    name: "Monday Coffee Expansion & Market Potential Analysis",
    skills: [
      "PostgreSQL",
      "SQL",
      "Data Modeling",
      "Market Potential Analysis",
      "Window Functions",
      "CTEs",
      "Business Intelligence",
    ],
    logo: coffeeLogo,
    imgSrc: "",
    description:
      "A SQL-driven market potential analysis examining online sales performance, population demographics, and commercial rent metrics across major cities to recommend optimal physical store expansion sites.\n\nKey Highlights:\n• Formulated complex PostgreSQL queries utilizing CTEs, Window Functions (DENSE_RANK, LAG), multi-table JOINs, and date extractions to measure customer lifetime value, city-level total revenue, and month-over-month sales growth ratios.\n• Calculated market penetration metrics against demographic data (25% coffee consumer baseline) to quantify total addressable market (TAM) per city.\n• Evaluated unit economics by contrasting average revenue per customer against city-specific commercial rent estimates, delivering data-backed recommendations for top expansion target cities (Pune, Delhi, Jaipur).",
    GitHub: "https://github.com/VictorMMartinezJr/sql_monday_coffee",
    demoLink: "",
  },
  {
    name: "Spotify Stream Analytics & Query Optimization",
    skills: [
      "PostgreSQL",
      "SQL",
      "Database Optimization",
      "Indexing",
      "EXPLAIN ANALYZE",
      "Window Functions",
      "CTEs",
      "Data Profiling",
    ],
    logo: spotifyLogo,
    imgSrc: "",
    description:
      "An end-to-end SQL analysis and performance-tuning project examining track attributes, platform engagement metrics, and streaming distributions across 20k+ Spotify records.\n\nKey Highlights:\n• Executed complex PostgreSQL queries leveraging Window Functions (DENSE_RANK), CTEs, subqueries, and conditional aggregations (CASE/COALESCE) to analyze cross-platform streaming behavior (Spotify vs. YouTube) and artist performance.\n• Conducted query execution profiling using EXPLAIN ANALYZE to identify database bottlenecks and scan inefficiencies.\n• Benchmarked and implemented B-tree indexing strategies on high-frequency query columns, reducing query execution time by over 97% (from 7.0ms to 0.15ms).",
    GitHub: "https://github.com/VictorMMartinezJr/sql_spotify",
    demoLink: "",
  },
];

export { dataAnalyticsData };

// --- ARCHIVED DATA (FOR REFERENCE PURPOSES ONLY) ---

// const appsData = [
//   {
//     name: "EchoSphere",
//     skills: [
//       "React",
//       "TailwindCSS",
//       "Context API",
//       "Cloudinary",
//       "Java",
//       "Springboot",
//       "MongoDB",
//       "Netlify",
//       "Render",
//     ],
//     imgSrc: echosphere,
//     description:
//       "A full-stack music streaming web app built with React, TailwindCSS, Spring Boot, and MongoDB. Users can browse songs, play music, create accounts, and enjoy a clean, responsive UI. Includes secure JWT authentication, dynamic routing, and real-time audio playback. Features a full Admin Dashboard where authorized users can upload new tracks, edit metadata, and manage the entire music catalog.",
//     disclaimer:
//       "🚀 Note: This application is hosted on a free-tier cloud instance. Please allow 45-60 seconds for the server to 'spin up' on your first visit. Thank you for your patience!",
//     GitHub: "https://github.com/VictorMMartinezJr/EchoSphere",
//     demoLink: "https://echosphere-user.netlify.app",
//   },
//   {
//     name: "Nexa",
//     skills: [
//       "React",
//       "TailwindCSS",
//       "Context API",
//       "Cloudinary",
//       "Java",
//       "Springboot",
//       "MySQL",
//       "Netlify",
//       "Aiven",
//       "Render",
//     ],
//     imgSrc: nexa,
//     description:
//       "A full-stack cloud-native e-commerce platform built with React, Tailwind CSS, Spring Boot, and MySQL. Architected with a strictly typed relational schema hosted on Aiven Cloud, Nexa provides a high-performance retail experience with real-time inventory tracking and dynamic category filtering. Features secure JWT authentication for user sessions and a robust backend logic for managing complex product variants. Deployed using a decoupled architecture on Render and Netlify, ensuring 100% data integrity and scalable asset management via Cloudinary.",
//     disclaimer:
//       "🚀 Note: This application is hosted on a free-tier cloud instance. Please allow 45-60 seconds for the server to 'spin up' on your first visit. Thank you for your patience!",
//     GitHub: "https://github.com/VictorMMartinezJr/Nexa",
//     demoLink: "https://nexaapparel.netlify.app",
//   },
//   {
//     name: "NavAid",
//     skills: [
//       "React",
//       "React-Konva",
//       "TailwindCSS",
//       "Context API",
//       "Dijkstra's Algorithm",
//       "Framer Motion",
//       "Netlify",
//     ],
//     imgSrc: navaid,
//     description:
//       "An indoor navigation web app that helps students and visitors find the fastest route to any room in Building A at Gwinnett Tech. Built an interactive map canvas, real-time Dijkstra pathfinding, search, and dynamic coordinate scaling for accurate navigation. Developed in collaboration with the Computer Science department at my college, and the project led to being invited as a co-founder of a new student innovation/programming club.",
//     GitHub: "https://github.com/VictorMMartinezJr/Personal-Portfolio",
//     demoLink: "https://navaid-v1.netlify.app",
//   },
// ];

// const landingPagesData = [
//   {
//     name: "Spylt",
//     skills: [
//       "HTML",
//       "CSS",
//       "Typescript",
//       "React",
//       "TailwindCSS",
//       "Responsive UI",
//       "GSAP",
//       "Cloudinary",
//       "Netlify",
//     ],
//     imgSrc: spylt,
//     description:
//       "Spylt is a premium, fully animated landing page for a beverage company. It features a clean, responsive design with optimized images and engaging animations created with GSAP including ScrollTrigger, clip path animations, and horizontal scrolling sections.\n\nBest experience on desktop devices",
//     GitHub: "https://github.com/VictorMMartinezJr/spylt",
//     demoLink: "https://spylt-v1.netlify.app",
//   },
//   {
//     name: "Restaura",
//     skills: [
//       "HTML",
//       "CSS",
//       "Typescript",
//       "React",
//       "TailwindCSS",
//       "Responsive UI",
//       "Framer Motion",
//       "Cloudinary",
//       "Netlify",
//     ],
//     imgSrc: restaura,
//     description:
//       "Restaura is a premium, responsive front-end website designed for a concept fusion restaurant specializing in Indian and Japanese cuisine. Optimized images and subtle animations with framer motion create an engaging user experience.",
//     GitHub: "https://github.com/VictorMMartinezJr/Restaura",
//     demoLink: "https://restaura-v1.netlify.app",
//   },
//   {
//     name: "VirtualR",
//     skills: [
//       "HTML",
//       "CSS",
//       "Typescript",
//       "React",
//       "TailwindCSS",
//       "Responsive UI",
//       "Cloudinary",
//       "Netlify",
//     ],
//     imgSrc: virtualR,
//     description:
//       "A landing page for a company offering virtual reality solutions. Fully responsive for all devices and optimized images.\n\nVirtualR is a comprehensive suite of intuitive development tools designed to bridge the gap between imagination and immersive reality.",
//     GitHub: "https://github.com/VictorMMartinezJr/VirtualR",
//     demoLink: "https://virtualr-v1.netlify.app/",
//   },
//   {
//     name: "Luxure Details",
//     skills: [
//       "HTML",
//       "CSS",
//       "Javascript",
//       "React",
//       "TailwindCSS",
//       "Responsive UI",
//       "Netlify",
//     ],
//     imgSrc: luxureDetails,
//     description:
//       "A landing page for a luxury car detailing brand. Fully responsive for all devices and optimized images.",
//     GitHub: "https://github.com/VictorMMartinezJr/LuxureDetails",
//     demoLink: "https://luxuredetails-v1.netlify.app",
//   },
// ];
