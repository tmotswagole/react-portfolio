import React, { useRef, useEffect } from 'react';
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/Thabiso+Motswagole+CV.pdf";
import Info from "./Info";
import Tilt from 'react-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function About() {

    const buttonRef = useRef();

    useEffect(() => {
        const applyContainerProperties = () => {
            buttonRef.current.classList.add("effect-container");
        };

        const onClick = () => {
            buttonRef.current.classList.remove("active");
            setTimeout(() => {
                buttonRef.current.classList.add("active");
            }, 1);
        }

        applyContainerProperties();

        // Add the event listener on mount
        buttonRef.current.addEventListener("mousedown", onClick);

        // Needed for referencing the ref in the return function
        const cleanupRef = buttonRef.current;

        return () => {
            cleanupRef.removeEventListener("mousedown", onClick);
        }
    });

  return (
    <section className="about section" id="about">
        
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
            <Tilt className="Tilt" options={{ max : 25 }} >
                {/* <img src={AboutImg} alt="" loading="lazy" className="about__img" /> */}
                <LazyLoadImage
                alt="about.jpg"
                effect="blur"
                className="about__img"
                src={AboutImg} />
            </Tilt>
            <div className="about__data">

                <Info />

                <p className="about__description">

                As a Fullstack developer, I have 6+ years experience in software development in a variety of stacks. Technologies such as Java, SPRING BOOT, SQL, Oracle 11g, MySQL, Python, React and so on. I also have done some server management of Linux and Unix servers. I have previous work experience in Database maintenace, scheduling and event creation.

                </p>

                <a download="" ref={buttonRef} href={CV} className="button button--flex" target="_blank" rel="noreferrer">
                    
                    Download CV

                    <svg xmlns="http://www.w3.org/2000/svg" class="button__icon" viewBox="0 0 24 24">
                        <path fill="var(--container-color)" 
                        d="M8,8a1,1,0,0,0,0,2H9A1,1,0,0,0,9,8Zm5,12H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4h5V7a3,3,0,0,0,3,3h3v2a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,12.06,2H6A3,3,0,0,0,3,5V19a3,3,0,0,0,3,3h7a1,1,0,0,0,0-2ZM13,5.41,15.59,8H14a1,1,0,0,1-1-1ZM14,12H8a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm6.71,6.29a1,1,0,0,0-1.42,0l-.29.3V16a1,1,0,0,0-2,0v2.59l-.29-.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l2-2A1,1,0,0,0,20.71,18.29ZM12,18a1,1,0,0,0,0-2H8a1,1,0,0,0,0,2Z"/>
                    </svg>
                
                
                </a>

            </div>

        </div>

    </section>
  )
}

export default About