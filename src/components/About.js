import React from "react";
import "./About.css";
import Img from "../Img/skills.jpg";
import Experiance from "./Experiance";

const About = () => {
  return (
    <div className="About">
      <div className="About-bg"></div>
      <div className="About-left">
        <div className="About-left-img-container bg"></div>
        <div className="About-left-img-container">
          <img src={Img} alt="" className="About-left-img" />
        </div>
      </div>
      <div className="About-right">
        <h1 className="About-right-title">What are my skills?</h1>
        <div className="About-right-exp">
          <div className="About-right-exp-container-wrapper">
            <h3 className="About-right-exp-container-title">Frontend</h3>
            <div className="About-right-exp-container">
              <Experiance lang="React" level="Experianced" />
              <Experiance lang="CSS" level="Experianced" />
              <Experiance lang="HTML" level="Experianced" />
              <Experiance lang="JavaScript" level="Experianced" />
              <Experiance lang="Tailwind" level="Intermediate" />
              <Experiance lang="Bootstrap" level="Intermediate" />
            </div>
          </div>
          <div className="About-right-exp-container-wrapper">
            <h3 className="About-right-exp-container-title">Backend</h3>
            <div className="About-right-exp-container">
              <Experiance lang="Node JS" level="Intermediate" />
              <Experiance lang="MongoDB" level="Intermediate" />
              <Experiance lang="PHP" level="Basic" />
              <Experiance lang="MySQL" level="Intermediate" />
              <Experiance lang="Python" level="Experianced" />
              <Experiance lang="Java" level="Experianced" />
            </div>
          </div>
          <div className="About-right-exp-container-wrapper">
            <h3 className="About-right-exp-container-title">Other</h3>
            <div className="About-right-exp-container">
              <Experiance lang="C#" level="Basic" />
              <Experiance lang="C++" level="Intermediate" />
              <Experiance lang="Go" level="Basic" />
              <Experiance lang="Flutter" level="Basic" />
              <Experiance lang="Unity" level="Intermediate" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
