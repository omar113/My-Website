import React from "react";
import "./Introduction.css";
import Me from "../Img/me.png";
import MuiAlert from "@mui/material/Alert";

const Introduction = () => {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <div className="Intro">
      {(window.innerWidth < 1101) && <Alert className="Intro-mobile-alert" severity="warning">
        Please access from a computer for better experiance.
      </Alert>}
      <div className="Intro-left">
        <div className="Intro-left-wrapper">
          <h2 className="Intro-top">Hello, My name is</h2>
          <h1 className="Intro-name">Omar AboElazaim</h1>
          <div className="Intro-title">
            <div className="Intro-title-wrapper">
              <div className="Intro-title-name">Computer Engineer</div>
              <div className="Intro-title-name">Web Developer</div>
              <div className="Intro-title-name">UI/UX Designer</div>
              <div className="Intro-title-name">Application Developer</div>
              <div className="Intro-title-name">Software Developer</div>
              <div className="Intro-title-name">Traveller</div>
            </div>
          </div>
          <div className="Intro-description">
            I am an enthusiastic Computer Engineer eager to contribute to team
            success through hard work, attention to detail and excellent
            organizational skills.
          </div>
        </div>
      </div>
      <div className="Intro-right">
        <div className="Intro-img-background"></div>
        <img src={Me} alt="" className="Intro-img" />
      </div>
    </div>
  );
};

export default Introduction;
