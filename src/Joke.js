import React from "react";
export default function Joke(props) {
  const StyleQuestion = {
    color: "green",
    fontSize: 24
  };
  const StyleNoQuestion = {
    color: "red",
    fontSize: 16
  };
  if (props.Question !== "")
    return (
      <div style={StyleQuestion} className="questionJoke">
        {props.Question + props.Punchline}
      </div>
    );
  else
    return (
      <div style={StyleNoQuestion} className="noQuestionJoke">{`${
        props.Punchline
      } + Hey`}</div>
    );
}
