import React, { ReactElement, useContext } from "react";
import { Question } from "../../../types";
import AnswerChoice from "../answer-choice/answer-choice";
import { store } from "../../../store";
import "./multiple-choice.scss";

const MultipleChoice = (): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const global = useContext(store) as any;
  const state = global.state;
  const dispatch = global.dispatch;

  const question: Question = state.currentQuestionInfo;

  const addAnswer = (): void => {
    const blankAnswer = {
      text: "",
      isAnswer: false,
    };
    const answers = [...question.QuestionOptions];

    answers.push(blankAnswer);

    dispatch({
      type: "set-current-question-info",
      payload: { ...question, QuestionOptions: answers },
    });
  };

  return (
    <div className="answer-choices">
      <span className="answer-choice-header">
        <span className="red">*</span> Answers:
      </span>

      {question.QuestionOptions.map((answer, index) => (
        <AnswerChoice
          key={index}
          index={index}
          answer={answer}
          letter={String.fromCharCode(65 + index)}
        />
      ))}

      <div className="add-answer">
        <button className="add-answer-button" onClick={addAnswer}>
          <span className="add-answer-icon">&#8853;&nbsp;</span>Add Answer
          Choice
        </button>
      </div>
    </div>
  );
};

export default MultipleChoice;
