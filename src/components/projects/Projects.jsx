import React, { useState } from "react";
import "./projects.css";

function Projects() {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="projects section" id="projects">

      <h2 className="section__title">Projects</h2>

      <span className="section__subtitle">What I've accomplished</span>

      <div className="projects__container container grid">

        <div className="projects__content">

          <div>

            <i className="bx bxl-java projects__icon"></i>

            <h3 className="projects__title">
              Java <br /> Developer
            </h3>

          </div>

          <span className="projects__button" onClick={() => toggleTab(1)}>
            View More{" "}
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "projects__modal active-modal" : "projects__modal"}>

            <div className="projects__modal-content">

              <i className="uil uil-times projects__modal-close" onClick={() => toggleTab(0)}></i>

              <h3 className="projects__modal-title">Java Developer</h3>

              <p className="projects__modal-description">
                6+ Experience working with Java Software Developer on personal
                and professional projects.
              </p>

              <ul className="projects__modal-projects grid">

                <li className="projects__modal-project">

                  <i className="uil uil-check-circle projects__modal-icon"></i>

                  <p className="projects__modal-info">
                    During the development of BURS' first mobile application, I
                    worked as a fullstack developer developing the frontend
                    using Android Studio.
                  </p>
                  
                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>

                  <p className="projects__modal-info">
                    Worked as a fullstack developer on projects at SAiS working
                    on Spring Boot API.
                  </p>

                </li>

              </ul>

            </div>

          </div>

        </div>

        <div className="projects__content">

          <div>

            <i className="bx bxl-react projects__icon"></i>

            <h3 className="projects__title">
              React <br /> Developer
            </h3>

          </div>

          <span className="projects__button" onClick={() => toggleTab(2)}>
            View More{" "}
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "projects__modal active-modal" : "projects__modal"}>

            <div className="projects__modal-content">

              <i className="uil uil-times projects__modal-close" onClick={() => toggleTab(0)}></i>

              <h3 className="projects__modal-title">React Developer</h3>

              <p className="projects__modal-description">
                3+ Experience working with React on personal and professional
                projects.
              </p>

              <ul className="projects__modal-projects grid">

                <li className="projects__modal-project">

                  <i className="uil uil-check-circle projects__modal-icon"></i>

                  <p className="projects__modal-info">
                    Developed a module that would allow customers to log tickets
                    on incidents, queries or compliments and would allow an
                    admin on the side of Botswana Life, the client, to reach out
                    and chat with the customers on the website.
                  </p>

                </li>

                <li className="projects__modal-project">

                  <i className="uil uil-check-circle projects__modal-icon"></i>

                  <p className="projects__modal-info">
                    While supporting the Sales Platform for Botswana Life, I
                    reduced load times of all pictures by compressing and lazy
                    loading improving load times to less than a second.
                  </p>

                </li>

                <li className="projects__modal-project">

                  <i className="uil uil-check-circle projects__modal-icon"></i>

                  <p className="projects__modal-info">
                    The development of this website.
                  </p>

                </li>

              </ul>

            </div>

          </div>

        </div>

        <div className="projects__content">

          <div>

            <i className="bx bx-laptop projects__icon"></i>

            <h3 className="projects__title">
              Fullstack <br /> Developer
            </h3>

          </div>

          <span className="projects__button" onClick={() => toggleTab(3)}>
            View More{" "}
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>

          <div className={toggleState === 3 ? "projects__modal active-modal" : "projects__modal"}>

            <div className="projects__modal-content">

              <i className="uil uil-times projects__modal-close" onClick={() => toggleTab(0)}></i>

              <h3 className="projects__modal-title">Fullstack Developer</h3>

              <p className="projects__modal-description">
                5+ Experience working with Fullstack Developer on personal and
                professional projects.
              </p>

              <ul className="projects__modal-projects grid">

                <li className="projects__modal-project">

                  <i className="uil uil-check-circle projects__modal-icon"></i>

                  <p className="projects__modal-info">
                    Developed a module that would allow customers to log tickets
                    on incidents, queries or compliments. This website was built
                    in React and I handled both backend and frontend.
                  </p>

                </li>

                <li className="projects__modal-project">

                  <i className="uil uil-check-circle projects__modal-icon"></i>

                  <p className="projects__modal-info">
                    Developed BURS first Android application using Android
                    Studio in Java, Retrofit and SPRING framework, REST
                    webservices.
                  </p>

                </li>

              </ul>

            </div>

          </div>

        </div>

        <div className="projects__content">

          <div>

            <i className="bx bxl-spring-boot projects__icon"></i>

            <h3 className="projects__title">
              Backend <br /> Developer
            </h3>

          </div>

          <span className="projects__button" onClick={() => toggleTab(4)}>
            View More{" "}
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>

          <div className={toggleState === 4 ? "projects__modal active-modal" : "projects__modal"}>

            <div className="projects__modal-content">

              <i className="uil uil-times projects__modal-close" onClick={() => toggleTab(0)}></i>

              <h3 className="projects__modal-title">Backend Developer</h3>

              <p className="projects__modal-description">
                5+ Experience working with Backend Developer on personal and
                professional projects.
              </p>

              <ul className="projects__modal-projects grid">

                <li className="projects__modal-project">

                  <i className="uil uil-check-circle projects__modal-icon"></i>

                  <p className="projects__modal-info">
                    Working with Hollard (client), I fixed API and added a
                    feature to convert files obtained from the user, to post to
                    the various banks. This turned a previously tedious and
                    manual job automatic.
                  </p>

                </li>

                <li className="projects__modal-project">

                  <i className="uil uil-check-circle projects__modal-icon"></i>

                  <p className="projects__modal-info">
                    Developed a MySQL events to handle multiple actions upon
                    insert when registering a new user to allow the system to
                    put a timer that will change values accordingly if the
                    customer fails to verify their account.
                  </p>

                </li>

                <li className="projects__modal-project">

                  <i className="uil uil-check-circle projects__modal-icon"></i>

                  <p className="projects__modal-info">
                    During the development of BURS' first mobile application, I
                    worked as a fullstack developer creating both the SQL
                    queries and API.
                  </p>

                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;
