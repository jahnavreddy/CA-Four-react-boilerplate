import React, { useState } from 'react';
import QuestionBox from './QuestionBox';

function Home() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? "white" : "black";
    document.body.style.color = isDarkMode ? "black" : "white";
  };

  const start = () => {
    setQuizStarted(true);
  };

  return (
    <div>

      {quizStarted ? (
        <QuestionBox />
        ) : (
        <div>  
            <button
        className="theme-toggle"
        onClick={toggleDarkMode}
      >
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </button>
          <div className='home-main'>
            <img src="https://clipart-library.com/images/rcjybXXcR.png" alt="" className='tick-image'/>
            <h2  className='unleash'>"Unleash the Quizmaster in You!"</h2> 
            <div className='get-button'>
              <img
            src="https://png.pngtree.com/png-vector/20221119/ourmid/pngtree-smiling-girl-point-up-with-fingers-png-image_6471570.png"
            alt="" className='pointing-image'
          />
          <button className='getStarted' onClick={start}>
            Get Started
          </button>
          </div>
          <img
            src="https://kalvium.com/wp-content/uploads/2023/04/Kalvium-Logo-SVG.svg"
            alt="" className='kalvium-logo'
          />
        </div>
      </div>
        
        )}

    </div>
  );
}

export default Home;