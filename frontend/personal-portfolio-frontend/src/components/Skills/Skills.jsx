import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "../SectionTitle";
import { skillsData } from "../../skillsData";
import Skill from "./Skill";

const Skills = () => {
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { once: true });

  return (
    <section
      aria-label="My skills"
      id="skills"
      className="h-auto w-full flex flex-col justify-center items-center px-4 overflow-hidden mt-12 sm:my-20 lg:px-8 xl:px-12 2xl:px-16"
    >
      <div className="flex flex-col justify-center items-center text-center lg:flex-1">
        <SectionTitle title="Skills" />
        <p className="my-4 px-4 text-lg sm:text-2xl">
          <span className="font-semibold mt-2 inline-block sm:mt-4 lg:mt-6">
            Data Analysis & Visualization:
          </span>{" "}
          Excel, SQL (PostgreSQL, MySQL), Tableau, Data Storytelling
          <br />
          <span className="font-semibold mt-2 inline-block sm:mt-4 lg:mt-6">
            Data Pipelines & Programming:
          </span>{" "}
          Python (Jupyter, Padas, NumPy, SQLAlchemy), REST APIs, ETL Pipelines
          <br />
          <span className="font-semibold mt-2 inline-block sm:mt-4 lg:mt-6">
            Core Software Engineering:
          </span>{" "}
          Java, C++, JavaScript, React, Git/GitHub,
          <br />
        </p>
      </div>
      <ul
        className="grid grid-cols-3 gap-4 justify-center items-center md:grid-cols-4 xl:grid-cols-8 xl:grid-rows-1 w-full"
        ref={skillsRef}
        aria-label="Skills logos"
      >
        {skillsData.map((skill, index) => (
          <Skill
            key={skill.id}
            imgSrc={skill.imgSrc}
            name={skill.name}
            isInView={isInView}
            animationDelay={skill.id * 0.1}
          />
        ))}
      </ul>
    </section>
  );
};

export default Skills;
