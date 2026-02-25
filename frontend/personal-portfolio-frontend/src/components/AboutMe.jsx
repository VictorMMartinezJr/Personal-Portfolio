import AboutMeSVG from "./AboutMeSVG";
import SectionTitle from "./SectionTitle";

const AboutMe = () => {
  return (
    <section
        aria-label="About me"
      id="about"
      className="h-auto flex flex-col justify-center items-center px-4 mt-12 xl:flex-row xl:text-left xl:px-12 2xl:px-16"
    >
      <div className="flex flex-col justify-center items-center text-center lg:flex-1">
        <SectionTitle title="About Me" />
        <p className="mt-4 px-4 text-lg sm:text-2xl">
          Hey there 👋 ! I'm Victor and I specialize in building high-performance applications using React, Java, and Spring Boot.
          I am the 2026 SkillsUSA Georgia Computer Programming State Champion 🥇and will be representing Georgia in the national championship in June.
        </p>
        <p className="my-4 px-4 text-lg sm:text-2xl">
          Beyond the competition, I earned my Associates Degree in Computer Programming at Gwinnett Technical College with a 4.0 GPA and I am now pursuing my Bachelor's Degree in Computer Science at Kennesaw State University
        </p>
        <p className="mb-4 px-4 text-lg sm:text-2xl">
          During my time at Gwinnett Technical College, I Co-Founded and currently serve as President of a new innovation programming club. In this role, I bridge technical
          craftsmanship with leadership. I am now seeking a Software Engineering/Web Developer role where I can
          apply this same competitive drive to build the future of software.
        </p>
      </div>
      <div className="flex justify-center items-center lg:flex-1">
        <AboutMeSVG />
      </div>
    </section>
  );
};

export default AboutMe;
