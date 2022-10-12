import React, { useState } from "react";
import "./portfolio.css";

function Portfolio() {

    const [toggleState, setToggleState] = useState(2);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="portfolio section">
        
        <h2 className="section__title">My Portfolio</h2>
        <span className="section__subtitle">Recent Works</span>

        <div className="portfolio__container container">

            <div className="portfolio__tabs">

                <div className="portfolio__button portfolio__active button--flex" onClick={() => toggleTab(1)}>

                    <i className="uil uil-graduation-cap portfolio__icon"></i> Education

                </div>

                <div className="portfolio__button button--flex" onClick={() => toggleTab(2)}>

                    <i className="uil uil-briefcase-alt portfolio__icon"></i> Experience

                </div>

            </div>

            <div className="portfolio__sections">

                <div className={toggleState === 1 ? "portfolio__content portfolio__content-active" : "portfolio__content"}>

                    <div className="portfolio__data">

                        <div>

                            <h3 className="portfolio__title">B.sc (Hons) Computer Systems Engineering</h3>
                            <span className="portfolio__subtitle">University of Sunderland, United Kingdom</span>

                            <div className="portfolio__calender">

                                <i className="uil uil-calendar-alt"></i>2019 (graduated)

                            </div>

                        </div>

                        <div>

                            <span className="portfolio__rounder"></span>

                            <span className="portfolio__line"></span>

                        </div>

                    </div>

                    <div className="portfolio__data">

                        <div></div>

                        <div>

                            <span className="portfolio__rounder"></span>

                            <span className="portfolio__line"></span>

                        </div>

                        <div>

                            <h3 className="portfolio__title">B.E. Civil Engineering</h3>
                            <span className="portfolio__subtitle">University of Namibia, Namibia</span>

                            <div className="portfolio__calender">

                                <i className="uil uil-calendar-alt"></i>2013 (unfinished)

                            </div>

                        </div>

                    </div>

                    <div className="portfolio__data">

                        <div></div>

                        <div>

                            <span className="portfolio__rounder"></span>

                            <span className="portfolio__line"></span>

                        </div>

                        <div>

                            <h3 className="portfolio__title">B.E. Aviation Engineering</h3>
                            <span className="portfolio__subtitle">Saint Petersburg State University, Russia</span>

                            <div className="portfolio__calender">

                                <i className="uil uil-calendar-alt"></i>2012 (unfinished)

                            </div>

                        </div>

                    </div>

                </div>

                <div className={toggleState === 2 ? "portfolio__content portfolio__content-active" : "portfolio__content"}>

                    <div className="portfolio__data">

                        <div></div>

                        <div>

                            <span className="portfolio__rounder"></span>

                            <span className="portfolio__line"></span>

                        </div>

                        <div>

                            <h3 className="portfolio__title">InsurTech – Developer (Full-Stack Developer)</h3>
                            <span className="portfolio__subtitle">Software Application and Information Solutions (SAiS), Botswana, Gaborone</span>

                            <div className="portfolio__calender">

                                <i className="uil uil-calendar-alt"></i>Dec 2020 – Aug 2021

                            </div>

                        </div>

                    </div>

                    <div className="portfolio__data">

                        <div>

                            <h3 className="portfolio__title">IT ATM and Cards Support Officer</h3>
                            <span className="portfolio__subtitle">African Banking Cooperation (BancABC), Botswana, Gaborone</span>

                            <div className="portfolio__calender">

                                <i className="uil uil-calendar-alt"></i>May 2020 – Dec 2020

                            </div>

                        </div>

                        <div>

                            <span className="portfolio__rounder"></span>

                            <span className="portfolio__line"></span>

                        </div>

                    </div>

                    <div className="portfolio__data">

                        <div></div>

                        <div>

                            <span className="portfolio__rounder"></span>

                            <span className="portfolio__line"></span>

                        </div>

                        <div>

                            <h3 className="portfolio__title">Information Technology Officer</h3>
                            <span className="portfolio__subtitle">African Banking Cooperation (BancABC), Botswana, Gaborone</span>

                            <div className="portfolio__calender">

                                <i className="uil uil-calendar-alt"></i>Nov 2019 – May 2020

                            </div>

                        </div>

                    </div>

                    <div className="portfolio__data">

                        <div></div>

                        <div>

                            <span className="portfolio__rounder"></span>

                            <span className="portfolio__line"></span>

                        </div>

                        <div>

                            <h3 className="portfolio__title">Intern Software Programmer</h3>
                            <span className="portfolio__subtitle">Botswana Unified Revenue Services (BURS), Botswana, Gaborone</span>

                            <div className="portfolio__calender">

                                <i className="uil uil-calendar-alt"></i>Jan 2018 – Jun 2018

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>
  )
}

export default Portfolio