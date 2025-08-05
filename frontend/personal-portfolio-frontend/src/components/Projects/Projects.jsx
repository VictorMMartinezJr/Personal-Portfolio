import { projectsData } from "./projectsData";
import Project from "./Project";
import SectionTitle from "../SectionTitle";
const Projects = () => {
  return (
    <div
      id="projects"
      className="h-auto flex flex-col justify-center items-center px-4 xl:text-left xl:px-12 2xl:px-16"
    >
      <SectionTitle title="Projects" />
      <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-3">
        <Project
          skills={projectsData.navAid.skills}
          description={projectsData.navAid.description}
          imgSrc={projectsData.navAid.imgSrc}
        />
        <Project
          skills={projectsData.navAid.skills}
          description={projectsData.navAid.description}
          imgSrc={projectsData.navAid.imgSrc}
        />
        <Project
          skills={projectsData.navAid.skills}
          description={projectsData.navAid.description}
          imgSrc={projectsData.navAid.imgSrc}
        />
      </div>
    </div>
  );
};

export default Projects;
