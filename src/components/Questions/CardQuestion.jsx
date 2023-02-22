import React from "react";
const CardQuestion = (props) => {
  
  return (
    <div className="question-container">
      <h1>{props.category} </h1>
      <h2>{props.correctAnswer} </h2>
    </div>
  );
};

export default CardQuestion;
