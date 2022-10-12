import React from 'react'

function ScrollDown() {
  return (
    <div className="home_-scroll">

        <a href="#about" className="home__scroll-button button--flex">

            <svg xmlns="http://www.w3.org/2000/svg" 
                    width="32px"
                    height="32px"
                    class="home__scroll-mouse" viewBox="0 0 24 24">
                <path 
                    fill="none"
                    stroke="var(--title-color)" 
                    d="M12,6a1,1,0,0,0-1,1V9a1,1,0,0,0,2,0V7A1,1,0,0,0,12,6Zm0-4A7,7,0,0,0,5,9v6a7,7,0,0,0,14,0V9A7,7,0,0,0,12,2Zm5,13A5,5,0,0,1,7,15V9A5,5,0,0,1,17,9Z"
                />
            </svg>

            <span className="home__scroll-name">Scroll Down</span>

            <i class="uil uil-arrow-down home__scroll-arrow"></i>

        </a>

    </div>
  )
}

export default ScrollDown