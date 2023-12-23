import React, { useState } from "react";
import questions from "../questions";
import Result from "./Result";
import Home from "./Home";

function QuestionBox({isDarkMode , setIsDarkMode }) {

  //destructuring of arrays using usestate

  const [q_no, setQ_no] = useState(0);
  const [isHome, setIsHome] = useState(false);
  const [isResult, setIsResult] = useState(false);
  const [count, setCount] = useState(0);
  const [highlight,setHighlight] = useState(false);

  const changeColour = ()=>{
    setHighlight(!highlight)
  }

  //conditional rendering for toggletheme button

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? "white" : "black";
    document.body.style.color = isDarkMode ? "black" : "white";
  };

  const handleQuit = () => {
    setIsHome(true);
  };

  //returning to home if isHome is true

  if(isHome){
    return <Home />
  }

  //increasing score if correct option is selected

  const handleOptionClick = (selectedOption) => {
    const correctOption = questions[q_no].answer;

    if (selectedOption === correctOption ) {
      setCount(count + 1);
    }

    //returning to result page if all the questions are completed answering

    if (q_no < questions.length - 1) {
      setQ_no(q_no + 1);
    } else {
      setIsResult(true);
    }
  };

  const currentQuestion = questions[q_no];

  //sending the score to result through props

  if (isResult) {
    return <Result setIsDarkMode={setIsDarkMode}  isDarkMode={isDarkMode} count={count} />;
  }

  return (
    <div className="quiz-main">
      <button
        className="theme-toggle"
        onClick={toggleDarkMode}
      >
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </button>
      <div className="quizQuestions">
        <h1 className="question_name">Question</h1>
        <h4 className="question-number">
          {q_no + 1} of {questions.length}
        </h4>
        <h2 className={ highlight ? "high_question" : "dark_question"}>{currentQuestion.question}</h2>
        <div>
          <div className="buttons-top">
            <button className="button-1" onClick={() => handleOptionClick(0)}>
              {currentQuestion.options[0].text}
            </button>
            <button className="button-2" onClick={() => handleOptionClick(1)}>
              {currentQuestion.options[1].text}
            </button>
          </div>
          <div className="buttons-bottom">
            <button className="button-3" onClick={() => handleOptionClick(2)}>
              {currentQuestion.options[2].text}
            </button>
            <button className="button-4" onClick={() => handleOptionClick(3)}>
              {currentQuestion.options[3].text}
            </button>
          </div>
        </div>
        <div className="options">
          <button className="high-light" onClick={changeColour}>{highlight ? "Highlight" : "Deemphasize"}</button>
          <button className="quit" onClick={handleQuit}>
            Quit
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionBox;