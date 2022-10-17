import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Data = () => {

  const { text } = useTypewriter({
    words: ["Fullstack Developer", "Java Developer", "Backend Developer", "Frontend Developer"],
    loop: 0
  });

  return (
    <div className="home__data">

        <h1 className="home__title">Thabiso Motswagole

        </h1>
        
        <h3 className="home__subtitle">Fullstack Developer</h3>
        {/* <span className="typing-effect text-danger">
          <h3 className="home__subtitle">{text}</h3>
          <Cursor cursorStyle="_" />
        </span> */}

        <p className="home__description">A talented software developer experienced in building, deploying, maintaining, and updating large scale systems in various sectors. A multifaceted developer, knowledgeable in Java, SQL, React, Spring Boot, TensorFlow and Python.</p>

        <a href="#contact" className="button button--flex">

            Come Say Hi!

            <svg xmlns="http://www.w3.org/2000/svg" className="home__send" stroke="var(--title-color)" viewBox="0 0 24 24"><path fill="#fff" d="M12,9a1,1,0,1,0,1,1A1,1,0,0,0,12,9Zm7-7H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2Zm1,16.59-2.29-2.3A1,1,0,0,0,17,16H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1ZM8,9a1,1,0,1,0,1,1A1,1,0,0,0,8,9Zm8,0a1,1,0,1,0,1,1A1,1,0,0,0,16,9Z"/></svg>


        </a>

    </div>
  )
}

export default Data