import React from "react";
import ProjectBox from "../Group/ProjectBox";
import { projectsArray } from "../Utils/MyProjects";

const ProjectOverview = () => {
  return (
    <>
      <div className="project_overview_container text-white flex flex-col justify-center items-center w-full py-6 pb-10 ">
        <div className="heading_project_overview w-full  md:py-10 flex justify-center items-center flex-col gap-2">
          <h2 className="text-center text-3xl font-bree text-gray-200">
            My Projects
          </h2>
          <div className="underline_design w-44 h-[3px] bg-slate-500"></div>
        </div>
        <div className="all_project_container lg:w-[90%] w-full flex justify-center items-center gap-10 flex-wrap py-6 ">
          {projectsArray.map((project, index) => {
            return (
              <React.Fragment key={index}>
                <ProjectBox project={project} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
      {/* <hr className="opacity-20" /> */}
    </>
  );
};

export default ProjectOverview;
