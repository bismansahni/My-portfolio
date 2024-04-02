import React from 'react';
import './style/Project.css' // Make sure to create this CSS file

const projects = [
  {
    name: 'HandsHeard',
    description: 'Developed a Python-based TensorFlow model to translate sign language into English, utilizing over 5,000 hand images for training. Honorary mention at DubHacks’23.',
    technologies: ['Python', 'TensorFlow'],
  },
  {
    name: 'JiraniDigitalLibrary',
    description: 'Orchestrated the creation of an Offline Digital Library for a Kenyan school, leveraging NAS for data storage and React for the user interface. Received a $3000 grant from ASU.',
    technologies: ['NAS', 'React'],
  },
  {
    name: 'DevilsDen',
    description: 'Spearheaded the software development of DevilsDen, ASU’s native social media platform, employing React, Drupal, and MongoDB. Improved engagement across university communities.',
    technologies: ['React', 'Drupal', 'MongoDB'],
  },
  {
    name: 'SaveMyData',
    description: 'Engineered a client-side model to deter phishing attacks, integral to the Grand Challenges Scholars Program. Utilized a unique image protocol verified on the client side.',
    technologies: ['Security', 'Client-Side Validation'],
  },
];

function Projects() {
  return (
    <div className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.join(', ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
