import React from 'react';
import "./skills.css";
import Fullstack from './Fullstack';
import Frontend from './Frontend';
import Backend from './Backend';
import Database from './Database';

function Skills() {
  return (
    <section className="skills section" id="skills">

        <h2 className="section__title">Skills</h2>

        <span className="section__subtitle">Technical Proficiency</span>

        <div className="skills__container container grid">

            <Fullstack />
            <Frontend />
            <Backend />
            <Database />

        </div>

    </section>
  )
}

export default Skills