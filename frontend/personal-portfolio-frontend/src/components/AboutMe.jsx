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
          Hey there 👋! I am a Data Analyst & Software Developer with a passion
          for transforming complex datasets into actionable business insights. I
          am the 2026 SkillsUSA Computer Programming National Bronze Medalist 🥉
          and Georgia State Champion 🥇.
        </p>
        <p className="my-4 px-4 text-lg sm:text-2xl">
          I hold an Associate degree in Computer Programming (4.0 GPA) and am
          pursuing my Bachelor's degree in Computer Science with a Minor in
          Mathematics at Kennesaw State University (4.0 GPA).
        </p>
        <p className="mb-4 px-4 text-lg sm:text-2xl">
          As Co-Founder & President of the Innovative Programming Club, I
          mentored students in SQL querying, Python data analysis, and modern
          software practices. I am seeking a Data Analyst role where I can apply
          my analytical skills, SQL/Python expertise, and competitive drive to
          solve complex business problems.
        </p>
      </div>
      <div className="flex justify-center items-center lg:flex-1">
        <AboutMeSVG />
      </div>
    </section>
  );
};

export default AboutMe;
