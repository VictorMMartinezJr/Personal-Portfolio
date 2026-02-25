import React from 'react'
import SectionTitle from "../SectionTitle.jsx";
import {appsData, landingPagesData} from "./projectsData.js";
import Project from "./Project.jsx";

const LandingPages = () => {
    return (
        <section
            aria-label="Landing page projects"
            id="projects"
            className="h-auto flex flex-col justify-center items-center px-4 mt-12 xl:text-left xl:px-12 2xl:px-16"
        >
            <SectionTitle title="Landing Pages" />
            <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-3">
                {landingPagesData.map(({name, skills, description, imgSrc, demoLink, GitHub}) => (
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
        </section>
    );
};
export default LandingPages
