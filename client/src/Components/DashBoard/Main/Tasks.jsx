import React from "react";
import "./Tasks.css";
import Projects from "./Projects";
const Tasks = () => {
  return (
    <>
    <div className="Container">
        <div className="box">
          <div className="box-content">
            <p>124</p>
            <h3>In Progress Task</h3>
          </div>
          <div className="box-icon" >
            <i class="fas fa-tachometer-alt icon"></i>
          </div>
        </div>

        <div className="box">
          <div className="box-content">
            <p>12</p>
            <h3>Todo Tasks</h3>
          </div>
          <div className="box-icon">
            <i className="fas fa-clipboard-list icon"></i>
          </div>
        </div>

        <div className="box">
          <div className="box-content">
            <p>04</p>
            <h3>Pending Tasks</h3>
          </div>
          <div className="box-icon">
          <i class="fa-solid fa-clock-rotate-left"></i>
        </div>
          </div>
     
      </div>
      <div className="container1">
       <Projects/>
      </div>
      
    </>

  );
};

export default Tasks;
