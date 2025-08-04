import React from 'react';

const ProjectCard = ({ title, description, imageUrl, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card-link">
        <div className="project-card">
            <img src={imageUrl} alt={title} className="project-image" />
            <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    </a>
  );
};

export default ProjectCard;