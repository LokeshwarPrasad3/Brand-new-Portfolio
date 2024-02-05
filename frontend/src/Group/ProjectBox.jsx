import { Link } from "react-router-dom";
import CodeIcon from "@mui/icons-material/Code";

const ProjectBox = ({ project }) => {
  return (
    <>
      <div className="project_card flex flex-col text-white font-overpass w-[22rem] h-64 bg-slate-800 shadow-sm shadow-blue-700 ">
        <div className="project_image_container w-[22rem] h-48 flex justify-center items-center">
          <img
            className="project_image w-[22rem] h-44 "
            src={project.src}
            alt={project.title}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-center text-xl font-overpass pt-2 pb-1 ">
            {project.title.slice(0, 25)}
          </p>
          <hr className="opacity-20 w-5/6 " />
          <div className="code_info flex justify-between w-full px-8 py-2">
            <Link
              to={project.repo}
              className="text-green-500  custom-transition hover:scale-105"
            >
              <CodeIcon className="relative top-[-1px]" />
              &nbsp;Repo
            </Link>
            <Link
              to={project.live_link}
              className="text-green-500 custom-transition hover:scale-105"
            >
              🔴Live
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectBox;
