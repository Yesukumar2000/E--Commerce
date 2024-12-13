import React from "react";
import "./Projects.css";
import image1 from "../../../assets/images/image1.jpg";
import image2 from "../../../assets/images/image2.jpg";

const ProjectItem = ({
  projectName,
  dueDate,
  tasks,
  progress,
  teamMembers,
}) => {
  return (
    <div className="project-item">
      <div className="project-details">
            <div className="project-header">
                <img src={image1} alt="Project Icon" className="project-icon" />
                <div className="project-name">{projectName}</div>
            </div>
            <div className="project-progress">
            <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="progress-text">{progress}%</span>
            </div>
            <div className="project-info">
            <p className="due-date">Due Date: {dueDate}</p>
            <p className="tasks">Tasks: {tasks}</p>
            </div>
      </div>

      <div className="project-team">
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <img
              key={index}
              src={member}
              alt={`Member ${index + 1}`}
              className="team-member"
            />
          ))}
          <span className="additional-members">+24</span>
        </div>
        <button className="add-btn">Add</button>
        <div className="project-options">
          <button className="options-btn">...</button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectData = [
    {
      projectName: "CO 01",
      dueDate: "8 Days",
      tasks: 34,
      progress: 60,
      teamMembers: [image1, image2, image1, image2],
    },
    {
        projectName: "CO 02",
        dueDate: "8 Days",
        tasks: 34,
        progress: 60,
        teamMembers: [image1, image2, image1, image2],
      },
      
  ];

  return (
    <div className="projects">
      <div className="projects-header">
        <h3>Recent Projects</h3>
        <a href="#view-all" className="view-all-link">
          View all
        </a>
      </div>
      {projectData.map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;