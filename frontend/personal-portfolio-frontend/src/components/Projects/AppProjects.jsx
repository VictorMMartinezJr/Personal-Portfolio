import Project from "./Project";
import SectionTitle from "../SectionTitle";
import {appsData} from "./projectsData.js";

const AppProjects = () => {
  return (
    <div
        aria-label="Full stack app projects"
      id="projects"
      className="h-auto flex flex-col justify-center items-center px-4 mt-12 xl:text-left xl:px-12 2xl:px-16"
    >
      <SectionTitle title="Apps" />
      <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-3">
        {appsData.map(({name, skills, description, imgSrc, demoLink, GitHub}) => (
          <Project key={name}
            name={name}
            skills={skills}
            description={description}
            imgSrc={imgSrc}
            demoLink={demoLink}
            GHLink={GitHub}
          />
        ))}
      </div>
    </div>
  );
};

export default AppProjects;
