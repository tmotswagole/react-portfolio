import React, { useRef, useEffect } from 'react';
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";

const Data = () => {

  const { text } = useTypewriter({
    words: ["FULLSTACK DEVELOPER", "JAVA DEVELOPER", "BACKEND DEVELOPER", "FRONTEND DEVELOPER"],
    loop: 0
  });
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
    <div className="home__data">

        <h1 className="home__title">Thabiso Motswagole

        </h1>
        
        {/* <h3 className="home__subtitle">Fullstack Developer</h3> */}
        <div className="col col-lg-6 col-12 hero-text flexy">
          <div>
            I am a {' '}
            <span className="typing-effect text-danger">
              {/* {text}
              <Cursor cursorStyle="_" /> */}
              <Typewriter
                words={["Fullstack Developer", "Java Developer", "Backend Developer", "Frontend Developer"]}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>
        </div>
        
        <br />

        <p className="home__description">A talented software developer experienced in building, deploying, maintaining, and updating large scale systems in various sectors. A multifaceted developer, knowledgeable in Java, SQL, React, Spring Boot, TensorFlow and Python.</p>

        <a href="#contact" ref={buttonRef} className="button button--flex">

            Come Say Hi!

            <svg xmlns="http://www.w3.org/2000/svg" className="home__send" stroke="var(--title-color)" viewBox="0 0 24 24"><path fill="#fff" d="M12,9a1,1,0,1,0,1,1A1,1,0,0,0,12,9Zm7-7H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2Zm1,16.59-2.29-2.3A1,1,0,0,0,17,16H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1ZM8,9a1,1,0,1,0,1,1A1,1,0,0,0,8,9Zm8,0a1,1,0,1,0,1,1A1,1,0,0,0,16,9Z"/></svg>


        </a>

    </div>
  )
}

export default Data