import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Thabiso</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        {/*============================= Socials =============================*/}

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/thabiso-solomon-motswagole/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-linkedin"></i>
          </a>

          <a
            href="https://github.com/tmotswagole"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-github"></i>
          </a>

          <a
            href="https://www.instagram.com/wearethabiso/"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-instagram"></i>
          </a>

          <a
            href="https://www.tiktok.com/@wearethabiso"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-tiktok"></i>
          </a>

          <a
            href="https://twitter.com/WeAreThabiso"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Copyright. All rigths reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
