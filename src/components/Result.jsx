import React, { useState } from 'react';
import QuestionBox from './QuestionBox';
import Home from './Home';

export default function Result({ count }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isQuiz,setIsQuiz] = useState(false)
  const [isHome,setIsHome] = useState(false)

  const goHome = () =>{
    setIsHome(!isHome)
  }

  if(isHome){
    return <Home />
  }

  const Percentage = ((count / 15) * 100);
  const roundedPercentage = Math.ceil(Percentage)

  const playagain = () =>{
    setIsQuiz(!isQuiz)
  }

  if(isQuiz){
    return <QuestionBox />
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? 'white' : 'black';
  };

  let phrase = '';
  if (count <= 5) {
    phrase = 'Work on your Skills';
  } else if (count <= 10) {
    phrase = 'Not bad';
  } else {
    phrase = 'Impressive';
  }

  return (
    <div className='results'>
      <button onClick={toggleDarkMode} className='result-toggle'>
        Switch to {isDarkMode ? 'Light' : 'Dark'}
      </button>
      <div className='result-page'>
        <h1 className='quiz-result'>Quiz Result</h1>
        <h1 className='feedback'>{phrase}</h1>
        <h3>Your Score: {count}</h3>
        <h3>Your Percentage: {roundedPercentage}%</h3>
        <button onClick={playagain} className='play-again'>Play Again</button>
        <button onClick={goHome} className='gohome'>Go back to Home</button>
      </div>
    </div>
  );
}