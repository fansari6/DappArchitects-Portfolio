import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCopyright,
  faEnvelope,
  // faPhone,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  // function submitProcessed() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // function sendEmail() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS serviceId, templateId, publicKey
    const serviceId = "service_xat3u9d";
    const templateId = "template_j2j3d1k";
    const publicKey = "p8QPvAGXuiJ-ZAfuf";

    const msg = document.getElementById("msg");

    // Create a new object that contains dynamic template params
    const templateParams = {
      name: name,
      email: email,
      to_name: "Me",
      message: message,
    };

    // Send email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        setTimeout(function () {
          msg.innerHTML = "Message sent sucessfully!";
        }, 0);
        setTimeout(function () {
          msg.innerHTML = "";
        }, 5000);
        clearTimeout();
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        setTimeout(function () {
          msg.innerHTML = "Error in sending email!";
        }, 0);
        setTimeout(function () {
          msg.innerHTML = "";
        }, 5000);
      });
  };

  return (
    <div id="contact">
      <div className={Styles.outerContainer}>
        {/* MENU */}
        {/* <div className={Styles.navBorder}>
          <nav className={Styles.nav}>
            <ul>
              <li>
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#MyWork">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </nav>
        </div> */}
        {/* MENU */}
        <div className={Styles.container}>
          <div className={Styles.contact}>
            <div className={Styles.row}>
              <div className={Styles.contactLeft}>
                <h1 className={Styles.subTitle}>Contact Me</h1>
                <a
                  href="mailto:faruk.ansari@dapparchitects.com"
                  className={Styles.contactLeftPA}
                >
                  <p>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className={Styles.fAIcon}
                    ></FontAwesomeIcon>
                    faruk.ansari@dapparchitects.com
                  </p>
                </a>
                <p className={Styles.contactLeftPA}>
                  <FontAwesomeIcon
                    icon={faPhoneSquare}
                    className={Styles.fAIcon}
                  ></FontAwesomeIcon>
                  317-690-6631
                </p>
                <div className={Styles.socialMediaIcons}>
                  <a
                    href="https://www.facebook.com/faruk.ansari.399"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i>
                      <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                    </i>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i>
                      <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                    </i>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i>
                      <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/faruk-ansari-59ab623/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i>
                      <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </i>
                  </a>
                  <a href="https://github.com" target="_blank" rel="noreferrer">
                    <i>
                      <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </i>
                  </a>
                </div>
                <div className={Styles.btnDownload}>
                  <a href="../assets/about/Faruk Ansari -  Resume.pdf" download>
                    Download Resume
                  </a>
                </div>
              </div>

              <div className={Styles.contactRight}>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  ></input>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  ></input>
                  <textarea
                    rows="6"
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <button type="submit" className={Styles.btnDownload}>
                    Send Email
                  </button>
                </form>
                <span id="msg" className={Styles.msg}></span>
              </div>
            </div>
          </div>

          <div className={Styles.copyright}>
            <p>
              Copyright{" "}
              <i>
                <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>
              </i>{" "}
              Faruk Ansari 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
