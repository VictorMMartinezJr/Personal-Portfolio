import SectionTitle from "../SectionTitle.jsx";
import { dataAnalyticsData } from "../../projectsData.js";
import Project from "./Project.jsx";

const DataAnalytics = () => {
  return (
    <section
      aria-label="Landing page projects"
      id="projects"
      className="h-auto flex flex-col justify-center items-center px-4 mt-12 xl:text-left xl:px-12 2xl:px-16"
    >
      <SectionTitle title="Data Analytics" />
      <div className="flex flex-col justify-center items-center whitespace-pre-line md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-3">
        {dataAnalyticsData.map(
          ({ name, skills, logo, description, imgSrc, demoLink, GitHub }) => (
            <Project
              key={name}
              name={name}
              skills={skills}
              logo={logo}
              description={description}
              imgSrc={imgSrc}
              demoLink={demoLink}
              GHLink={GitHub}
              className="md:min-h-[1650px]"
            />
          ),
        )}
      </div>
    </section>
  );
};
export default DataAnalytics;
