import AboutMeSVG from "./AboutMeSVG";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="h-auto flex flex-col justify-center items-center px-4 lg:flex-row lg:text-left lg:px-8 xl:px-12 2xl:px-16"
    >
      <div className="flex flex-col justify-center items-center text-center lg:flex-1">
        <h1 className="font-bold text-3xl text-purple-500 sm:text-6xl 2xl:text-8xl">
          About Me
        </h1>
        <p className="mt-4 px-4 sm:text-2xl">
          I'm Victor, a full-stack developer skilled in HTML, CSS, JavaScript,
          React, TailwindCSS, Spring Boot, and MySQL. I recently completed an
          indoor navigation app as part of a summer internship with my college's
          Computer Science department leaders. I currently have a 4.0 GPA and
          was chosen to represented my college at the SkillsUSA programming
          competition.
        </p>
        <p className="my-4 px-4 sm:text-2xl">
          After completing the navigation app, I was invited to become a
          founding member and team leader of a new innovation-driven student
          club. I'm excited about the vision for the student club and the chance
          to lead, mentor, and help other students grow as full-stack developers
          — especially with the added potential of integrating AI and
          collaborating under a funded NITIC grant.
        </p>
        <p className="mb-4 px-4 sm:text-2xl">
          I'm currently seeking a software engineering job where I can use my
          current experience and leadership skills to keep pushing my limits,
          learn from experienced engineers, and become the best developer I can
          be.
        </p>
      </div>
      <div className="flex justify-center items-center lg:flex-1">
        <AboutMeSVG />
      </div>
    </div>
  );
};

export default AboutMe;
