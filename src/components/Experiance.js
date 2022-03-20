import React from "react";
import './Experiance.css'
import { BsFillCheckCircleFill } from "react-icons/bs";

const Experiance = ({ lang, level }) => {
  return (
    <div className="Exp">
      <div className="Exp-lang-container">
        <BsFillCheckCircleFill className="Exp-check"/>
        <h3 className="Exp-lang">{lang}</h3>
      </div>
      <div className="Exp-level-container">
          <h5 className="Exp-level">{level}</h5>
      </div>
    </div>
  );
};

export default Experiance;
