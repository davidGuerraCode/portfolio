import React from 'react';
import { FiLink } from 'react-icons/fi';

import { Card } from '../Card';

const Project = ({ project }) => {
  const { name, link, images, description, technologiesUsed } = project;

  const technologies = technologiesUsed.map((tech, idx) => {
    return (
      <span key={idx} className="pv1 ph2 mr2 mt2 br-pill teal">
        {tech}
      </span>
    );
  });

  return (
    <Card width="450">
      <img
        src={images.join('')}
        alt="social-network-clone"
        className="project-img"
      />
      <div>
        <h3 className="mv2">{name}</h3>
        <a
          className="link underline-hover washed-green b dim"
          href={link}
          target="_blank"
          rel="noreferrer">
          Enlace al Demo
          <span className="ml1">
            <FiLink />
          </span>
        </a>
        <p className="mt3 lh-copy tj">{description}</p>
      </div>
      <div className="flex flex-column mt4">
        <span className="b">Creado con: </span>
        <div className="flex flex-wrap item-center f6 b">{technologies}</div>
      </div>
    </Card>
  );
};

export default Project;
