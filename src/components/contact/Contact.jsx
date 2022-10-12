import React from 'react';
import "./contact.css";

function Contact() {
  return (
    <section className="contact section" id="contact">

        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">

            <div className="contact__content">

                <h3 className="contact__content">Talk to me</h3>

                <div className="contact__info">

                    <div className="contact__card">

                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">example@outlook.com</span>

                        <a href="mailto:example@outlook.com" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>

                    </div>

                    <div className="contact__card">

                        <i className="bx bxl-whatsapp contact__card-icon"></i>

                        <h3 className="contact__card-title">Whatsapp</h3>
                        <span className="contact__card-data">+26774777777</span>

                        <a href="https://web.whatsapp.com" target="_blank" className="contact__button" rel="noreferrer">App me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>

                    </div>

                </div>

            </div>

            <div className="contact__content">

                <h3 className="contact__content">Write me your message</h3>

                <form className="contact__form">

                    <div className="contact__form-div">

                        <label className="contact__form-tag">Name</label>

                        <input type="text" name="name" className="contact__form-input" placeholder="Insert your name" />

                    </div>

                    <div className="contact__form-div">

                        <label className="contact__form-tag">Email</label>

                        <input type="email" name="email" className="contact__form-input" placeholder="Insert your email" />

                    </div>

                    <div className="contact__form-div contact__form-area">

                        <label className="contact__form-tag">Message</label>

                        <textarea name="message" cols="30" rows="10" className="contact__form-input" placeholder="Write your message" />

                    </div>

                    <button className="button button--flex">

                        Send Message

                        <svg xmlns="http://www.w3.org/2000/svg" className="home__send" stroke="var(--title-color)" viewBox="0 0 24 24"><path fill="#fff" d="M12,9a1,1,0,1,0,1,1A1,1,0,0,0,12,9Zm7-7H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2Zm1,16.59-2.29-2.3A1,1,0,0,0,17,16H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1ZM8,9a1,1,0,1,0,1,1A1,1,0,0,0,8,9Zm8,0a1,1,0,1,0,1,1A1,1,0,0,0,16,9Z"/></svg>


                    </button>

                </form>

            </div>

        </div>

    </section>
  )
}

export default Contact