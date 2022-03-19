import * as React from 'react';
import "./Contact.css";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2ck9n45",
        "template_mmifdcd",
        formRef.current,
        "T0h6sWdEEy57fyAOt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="Cont">
      <div className="Cont-bg"></div>
      <div className="Cont-wrapper">
        <div className="Cont-left">
          <h1 className="Cont-title">Let's discuss your Projects</h1>
          <div className="Cont-info">
            <div className="Cont-info-item">
              <BsTelephoneFill className="Cont-icon" /> +0201092514131
            </div>
            <div className="Cont-info-item">
              <MdEmail className="Cont-icon" /> omar.mohd1134@gmail.com
            </div>
            <div className="Cont-info-item">
              <AiFillHome className="Cont-icon" /> Fifth Settlement, New Cairo,
              Cairo, Egypt
            </div>
          </div>
        </div>
        <div className="Cont-right">
          <p className="Cont-desc">
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Your email has been sent successfully.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;
