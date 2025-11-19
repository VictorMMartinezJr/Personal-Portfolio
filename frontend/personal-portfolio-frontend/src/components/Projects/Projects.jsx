import { projectsData } from "./projectsData";
import Project from "./Project";
import SectionTitle from "../SectionTitle";
const Projects = () => {
  return (
    <div
      id="projects"
      className="h-auto flex flex-col justify-center items-center px-4 mt-12 xl:text-left xl:px-12 2xl:px-16"
    >
      <SectionTitle title="Projects" />
      <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-3">
        {projectsData.map((project) => (
          <Project
            name={project.name}
            skills={project.skills}
            description={project.description}
            imgSrc={project.imgSrc}
            demoLink={project.demoLink}
            GHLink={project.GitHub}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
