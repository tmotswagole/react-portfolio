import React from 'react';

function Info() {
  return (
    <div className="about__info grid">

        <div className="about__box">

            <i class='bx bx-award about__icon'></i>

            <h3 className="about__title">Experience</h3>

            <span className="about__subtitle">5 + Years Working</span>

        </div>

        <div className="about__box">

            <i class='bx bx-briefcase about__icon' ></i>

            <h3 className="about__title">Completed</h3>

            <span className="about__subtitle">10 + Projects</span>

        </div>

        <div className="about__box">

            <i class='bx bx-group about__icon' ></i>

            <h3 className="about__title">Collaboration Teams</h3>

            <span className="about__subtitle">6 countries</span>

        </div>

    </div>
  )
}

export default Info