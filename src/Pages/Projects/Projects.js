import React from 'react';

import { Header } from '../../components/Portfolio/components/Header';
import { Project } from '../../components/Portfolio/components/Project';
import { projectsData } from '../../components/Portfolio/components/Project';

const Projects = () => {
  const project = projectsData.map((project, idx) => (
    <Project key={idx} project={project} />
  ));

  return (
    <>
      <Header />
      <h2 className="subtitle">Proyectos</h2>
      <div className="flex flex-column justify-center mt3 ph3">
        <div className="flex justify-around flex-wrap">{project}</div>
      </div>
    </>
  );
};

export default Projects;
