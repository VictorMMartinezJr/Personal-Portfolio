import AboutMeSVG from "./AboutMeSVG";
import SectionTitle from "./SectionTitle";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="h-auto flex flex-col justify-center items-center px-4 mt-12 xl:flex-row xl:text-left xl:px-12 2xl:px-16"
    >
      <div className="flex flex-col justify-center items-center text-center lg:flex-1">
        <SectionTitle title="About Me" />
        <p className="mt-4 px-4 text-lg sm:text-2xl">
          Hey there! I'm Victor, a Full Stack Developer building scalable,
          high-impact applications using Java, Spring Boot, React, and SQL. Most
          recently, I successfully delivered a legacy indoor navigation system
          for Gwinnett Technical College, a project years in the making that
          utilized Dijkstra's algorithm to solve complex campus routing.
          Following the success of this deployment, I was selected by the
          Computer Science department as a Founding Member and Team Lead for a
          new innovation driven student club.
        </p>
        <p className="my-4 px-4 text-lg sm:text-2xl">
          Beyond my 4.0 GPA and representing my college at the SkillsUSA State
          Programming Competition, I am currently collaborating under a funded
          NITIC grant to integrate AI driven productivity into full stack
          workflows and mentor the next generation of developers.
        </p>
        <p className="mb-4 px-4 text-lg sm:text-2xl">
          I am seeking a Software Engineering role where I can apply my
          leadership experience and technical discipline to build the future of
          software.
        </p>
      </div>
      <div className="flex justify-center items-center lg:flex-1">
        <AboutMeSVG />
      </div>
    </div>
  );
};

export default AboutMe;
