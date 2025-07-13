import { Link } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import ImageLightbox from '../Components/Lightroom/ImagePreview';

const ProjectBox = ({ project }) => {
  return (
    <div className="project_card hover:scale-105 transition-all duration-500 ease-out flex overflow-hidden flex-col text-white font-karla w-full max-w-xs h-64 bg-slate-800 shadow-sm shadow-blue-700">

      <ImageLightbox imageUrl={project.src} />

      <div className="flex flex-col justify-center items-center">
        <p className="text-center text-xl font-karla pt-2 pb-1">
          {project.title.slice(0, 25)}
        </p>
        <hr className="opacity-20 w-5/6" />
        <div className="code_info flex justify-between w-full px-8 py-2">
          <Link
            to={project.repo}
            target="_blank"
            className="text-green-500 custom-transition hover:scale-105"
          >
            <CodeIcon className="relative top-[-1px]" />
            &nbsp;Repo
          </Link>
          <Link
            to={project.live_link}
            target="_blank"
            className="text-green-500 custom-transition hover:scale-105"
          >
            🔴Live
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;