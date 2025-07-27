import AboutMeSVG from "./AboutMeSVG";

const AboutMe = () => {
  return (
    <div className="h-auto flex flex-col justify-center items-center px-4 lg:flex-row lg:text-left lg:px-8 xl:px-12 2xl:px-16">
      <div className="flex flex-col justify-center items-center text-center lg:flex-1">
        <h1 className="font-bold text-3xl text-purple-500 sm:text-6xl 2xl:text-8xl">
          About Me
        </h1>
        <p className="mt-4 px-4 sm:text-2xl">
          Hi there! I'm Victor, a full-stack developer skilled in HTML, CSS,
          JavaScript, React, TailwindCSS, Spring Boot, and MySQL. I'm currently
          building an indoor navigation app in collaboration with my college's
          Computer Science department while maintaining a 4.0 GPA.
        </p>
        <p className="my-4 px-4 sm:text-2xl">
          I was also selected to represent my school at the SkillsUSA
          programming competition. I'm focused on landing a software engineering
          internship or job where I can grow, build, and make an impact.
        </p>
      </div>
      <div className="flex justify-center items-center lg:flex-1">
        <AboutMeSVG />
      </div>
    </div>
  );
};

export default AboutMe;
