import React from "react";
import "./project.css";
import Typed from "react-typed";

const g = ["Here are some project i design"];
// g use for type text
const Project = () => {
  return (
    <div className="project0">
      <h1 className="text-7xl text-secondary font-semibold">
        <Typed strings={g} typeSpeed={150} backSpeed={100} loop></Typed>
      </h1>
      <div className="project1 menu_5">
        <h1>Portfolio</h1> <br />
        <h3>
          Technology : React.<br></br> Description : This website is used to
          manage all information about me.
        </h3>
      </div>
      <div className="project2 menu_5">
        <h1>Patient Record Management System</h1> <br />{" "}
        <h3>
          Technology : Python (kivy).
          <br /> Description : This application is used to manage all
          information of patient. All the records of each patient is maintained
          in this project. All the manual work is maintained in this project.
          Whole history of patient with its treatment details is maintained in
          this.For Android and Windows use.
        </h3>
      </div>
      <div className="project3">
        <h1>Patient Record Management System</h1> <br />{" "}
        <h3>
          Technology : MERN Stack On Working.
          <br /> Description : This application is used to manage all
          information of patient. All the records of each patient is maintained
          in this project. All the manual work is maintained in this project.
          Whole history of patient with its treatment details is maintained in
          this.For Android and Windows use.
        </h3>
      </div>
    </div>
  );
};

export default Project;
