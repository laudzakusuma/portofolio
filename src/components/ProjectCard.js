import React from 'react';

const ProjectCard = ({ title, description, imageUrl, tags, link }) => {
  return (
    <div className="project-card-wrapper">
      <a href={link || '#'} target="_blank" rel="noopener noreferrer" className="project-card-link">
          <div className="project-card">
              <div className="card-image-container">
                <img src={imageUrl} alt={title} className="project-image" />
              </div>
              <div className="project-info">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="project-tags">
                    {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
              </div>
          </div>
      </a>
    </div>
  );
};

export default ProjectCard;