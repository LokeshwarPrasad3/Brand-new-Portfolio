import React from 'react';
import SkillsBox from '../Group/SkillsBox';
import {
  programmingLangArray,
  webTechnologiesArray,
  databaseArray,
  versionControlArray,
} from '../Utils/Skills';

const TechnicalSkills = () => {
  return (
    <>
      <div className="skill_page_container text-white flex flex-col items-center justify-center py-5 pb-14 font-overpass">
        <h2 className="text-center text-xl md:text-3xl font-overpass font-bold  bg-gradient-to-r from-green-500 to-cyan-500 text-transparent bg-clip-text">
          Technical Skills
        </h2>
        <div className="underline_design w-32 md:w-56 h-[2px] bg-slate-500"></div>

        <div className="skill_programming_lang skills_box_class ">
          <h3 className="pb-4 text-lg">Programming Languages</h3>
          <div className="programming_language_container flex justify-center flex-wrap items-center ">
            {programmingLangArray.map((lang, index) => (
              <React.Fragment key={index}>
                <SkillsBox data={lang} />
              </React.Fragment>
            ))}
          </div>
          <br />
          <hr className="opacity-20 w-[60%]" />
        </div>
        <div className="skill_programming_lang skills_box_class ">
          <h3 className="pb-4 text-lg">Technologies</h3>
          <div className="programming_language_container flex justify-center flex-wrap items-center ">
            {webTechnologiesArray.map((technology, index) => (
              <React.Fragment key={index}>
                <SkillsBox data={technology} />
              </React.Fragment>
            ))}
          </div>
        </div>
        <br />
        <hr className="opacity-20 w-[60%]" />
        <div className="skill_programming_lang skills_box_class ">
          <h3 className="pb-4 text-lg">Databases</h3>
          <div className="programming_language_container flex justify-center flex-wrap items-center ">
            {databaseArray.map((database, index) => (
              <React.Fragment key={index}>
                <SkillsBox data={database} />
              </React.Fragment>
            ))}
          </div>
        </div>
        <br />
        <hr className="opacity-20 w-[60%]" />
        <div className="skill_programming_lang skills_box_class ">
          <h3 className="pb-4 text-lg">Version Control System</h3>
          <div className="programming_language_container flex justify-center flex-wrap items-center ">
            {versionControlArray.map((vcs, index) => (
              <React.Fragment key={index}>
                <SkillsBox data={vcs} />
              </React.Fragment>
            ))}
          </div>
        </div>
        <br />
        <hr className="opacity-20 w-[60%]" />
      </div>
    </>
  );
};

export default TechnicalSkills;
