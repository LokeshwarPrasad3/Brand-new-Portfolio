import React, { useEffect, useRef } from 'react';
import ProjectBox from '../Group/ProjectBox';
import { FullStackProjectsArray, FrontendProjectsArray, ReactFrontendProjectsArray } from '../Utils/MyProjects';

const ProjectOverview = () => {
  return (
    <>
      <div className="project_overview_container text-white flex flex-col justify-center items-center w-full py-5 md:py-6 pb-10 container mx-auto">
        <div className="heading_project_overview w-full  md:py-10 flex justify-center items-center flex-col gap-0 md:gap-2 ">
          <h2 className="text-center text-xl md:text-3xl font-karla font-bold  bg-gradient-to-r from-green-500 to-cyan-500 text-transparent bg-clip-text">
            My Projects
          </h2>
          <div className="underline_design w-32 md:w-44 h-[2px] bg-slate-500"></div>
        </div>
        <h2 className='text-2xl font-karla font-medium mt-3 sm:mt-0' >Full Stack Projects ✅</h2>
        <div className="all_project_container w-full flex justify-center items-center gap-10 flex-wrap py-6 ">
          {FullStackProjectsArray.map((project, index) => {
            return (
              <React.Fragment key={index}>
                <ProjectBox project={project} />
              </React.Fragment>
            );
          })}
        </div>
        <div className='w-full bg-slate-700 h-[1px] my-4 mb-7' ></div>
        <h2 className='text-2xl font-karla font-medium' >React Frontend Projects ✅</h2>
        <div className="all_project_container w-full flex justify-center items-center gap-10 flex-wrap py-6 ">
          {ReactFrontendProjectsArray.map((project, index) => {
            return (
              <React.Fragment key={index}>
                <ProjectBox project={project} />
              </React.Fragment>
            );
          })}
        </div>
        <div className='w-full bg-slate-700 h-[1px] my-4 mb-7' ></div>
        <h2 className='text-2xl font-karla font-medium' >Frontend JS Projects ✅</h2>
        <div className="all_project_container w-full flex justify-center items-center gap-10 flex-wrap py-6 ">
          {FrontendProjectsArray.map((project, index) => {
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
