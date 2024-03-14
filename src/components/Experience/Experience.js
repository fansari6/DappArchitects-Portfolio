import React from "react";
import Styles from "./Experience.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faEthereum, faAppStore } from "@fortawesome/free-brands-svg-icons";

export const Experience = () => {
  return (
    <div id="MyWork">
      <div className={Styles.outContainer}>
        {/* MENU */}
        {/* <div className="navBorder">
          <nav className={Styles.nav}>
            <ul>
              <li>
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div> */}
        {/* MENU */}
        <div className={Styles.container}>
          <div className={Styles.experience}>
            <h1 className={Styles.subTitle}>My Experience</h1>
            <div className={Styles.experienceList}>
              <div>
                <i>
                  <FontAwesomeIcon
                    icon={faEthereum}
                    className={Styles.fAIcon}
                  ></FontAwesomeIcon>
                </i>
                <h2>Smart Contract Development</h2>
                <p>
                  I am a seasoned expert in blockchain smart contract
                  development, with a focus on ensuring the secure and efficient
                  implementation of decentralized applications (DApps). My
                  approach centers around translating intricate business logic
                  into functional and secure smart contracts that run seamlessly
                  on various blockchain platforms.
                  <br />
                  <br />
                  My specialization extends to conducting thorough security
                  audits, optimizing gas usage, and adhering to best practices
                  in smart contract development. This meticulous attention to
                  detail ensures that the smart contract solutions I deliver are
                  not only robust and reliable but also scalable and
                  cost-effective.
                  <br />
                  <br />
                  My ultimate objective is to leverage the power of blockchain
                  technology to create innovative and decentralized solutions
                  that have a tangible impact on the real world. I am passionate
                  about exploring the full potential of blockchain technology
                  and am dedicated to driving meaningful change through my work.
                </p>
                {/* <a href="#">Learn more...</a> */}
              </div>

              <div>
                <i>
                  <FontAwesomeIcon
                    icon={faAppStore}
                    className={Styles.fAIcon}
                  ></FontAwesomeIcon>
                </i>
                <h2>Blockchain Based DApp Development</h2>
                <p>
                  As a Blockchain DApp Developer, I am deeply immersed in the
                  exciting world of decentralized applications, where I combine
                  my technical prowess with a passion for innovation to create
                  transformative solutions. With a focus on blockchain
                  technology, I specialize in developing decentralized
                  applications (DApps) that revolutionize traditional industries
                  and pave the way for a more decentralized future.
                  <br />
                  <br />
                  My expertise lies in smart contract development, where I
                  architect and implement secure and efficient smart contracts
                  that power DApps. I am well-versed in various blockchain
                  protocols and decentralized consensus mechanisms, allowing me
                  to design DApps that are not only secure and reliable but also
                  scalable and user-friendly.
                  <br />
                  <br />
                  One of my key strengths is my ability to translate complex
                  technical concepts into tangible and accessible solutions. I
                  excel in creating intuitive user interfaces and seamless user
                  experiences, ensuring that my DApps are not only technically
                  sound but also easy and enjoyable to use.
                  <br />
                  <br />
                  In addition to my technical skills, I am committed to staying
                  at the forefront of blockchain technology by continuously
                  learning and adapting to new trends and developments. I am
                  passionate about exploring the full potential of blockchain
                  technology and its ability to revolutionize industries and
                  empower individuals.
                  <br />
                  <br />
                  Overall, my goal as a Blockchain DApp Developer is to harness
                  the power of blockchain technology to create innovative
                  solutions that drive real-world impact and usher in a new era
                  of decentralized innovation.
                </p>
                {/* <a href="#">Learn more...</a> */}
              </div>

              <div>
                <i>
                  <FontAwesomeIcon
                    icon={faCode}
                    className={Styles.fAIcon}
                  ></FontAwesomeIcon>
                </i>
                <h2>E-Commerce Website Development</h2>
                <p>
                  As a seasoned e-commerce web developer, I specialize in
                  crafting immersive online shopping experiences that seamlessly
                  blend creativity with technical precision. With a meticulous
                  eye for detail, I design and develop robust e-commerce
                  platforms that not only meet but exceed client expectations.
                  <br />
                  <br />
                  My expertise lies in creating dynamic and user-friendly
                  interfaces that enhance the shopping experience and drive
                  conversions. From secure payment gateways to personalized
                  product recommendations, I leverage the latest technologies
                  and best practices to deliver e-commerce solutions that are as
                  functional as they are visually appealing.
                  <br />
                  <br />
                  I am well-versed in a variety of e-commerce platforms and
                  technologies, allowing me to tailor solutions to meet the
                  unique needs of each project. Whether it's optimizing for
                  mobile responsiveness or integrating with third-party
                  services, I ensure that every aspect of the e-commerce site is
                  optimized for success.
                  <br />
                  <br />
                  My passion for e-commerce development extends beyond just
                  building websites; I am constantly exploring new trends and
                  innovations in the industry to ensure that my work is always
                  at the forefront of e-commerce excellence. My goal is to not
                  only meet but exceed client expectations, delivering
                  e-commerce solutions that drive results and leave a lasting
                  impression.
                </p>
                {/* <a href="#">Learn more...</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
