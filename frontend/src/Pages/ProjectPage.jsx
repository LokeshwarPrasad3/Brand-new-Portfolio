import { useEffect } from 'react';
import ProjectOverview from '../Components/ProjectOverview';

const ProjectPage = () => {
  // change title when about page
  useEffect(() => {
    document.title = 'Projects • Lokeshwar Prasad Dewangan';
  }, []);

  return (
    <>
      <ProjectOverview />
    </>
  );
};

export default ProjectPage;
