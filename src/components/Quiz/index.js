import React, { useState, useEffect } from "react";
import "../../App.css"

export default function Quiz() {

  const [question, setQuestion] = useState([]);

  const loadQuestion = async () => {
    await fetch("https://opentdb.com/api.php?amount=1&type=multiple")
      .then(response => response.json())
      .then(question => setQuestion(question.results));
  }

  useEffect(() => {

    loadQuestion();
  }, []);

  return (
    <div>
      {question.map(data=><div key={Math.random()}>
        <h3 className="content-center">{data.question}</h3>
  
        <div className="options">
          {data.incorrect_answers.map(ans => <button key={ans} className="option">{ans}</button>)}
          <button className="option">{ data.correct_answer }</button>
       
      </div> 
      </div>)}
      
    </div>
  )
};