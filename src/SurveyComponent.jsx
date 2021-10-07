import React, { Component } from "react";


import * as Survey from "survey-react";



import "survey-react/modern.css";
import "./index.css";

Survey.StylesManager.applyTheme("modern");

class SurveyComponent extends Component {
  constructor() {
    super();

  }
  render() {




    const json = {
      title: "Fundamental Mathematics Quiz",
      showProgressBar: "bottom",
      showTimerPanel: "top",
      maxTimeToFinishPage: 10,
      maxTimeToFinish: 25,
      firstPageIsStarted: true,
      startSurveyText: "Start Quiz",
      pages: [
        { questions: [{ type: "html", html: "You are about to start Test. <br/>You have 10 seconds for every page and 25 seconds for the whole quiz of 3 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready." }] },
        {
          questions: [
            {
              type: "radiogroup",
              name: "civilwar",
              title: "What is 33*37?",
              choices: ["1221", "1121", "2441", "4141"],
              correctAnswer: "1221"
            }
          ]
        },
        {
          questions: [
            {
              type: "radiogroup",
              name: "libertyordeath",
              title: "What is the GCD of 24,36,72?'",
              choicesOrder: "random",
              choices: ["12", "8", "72", "24"],
              correctAnswer: "12"
            }
          ]
        },
        {
          maxTimeToFinish: 15,
          questions: [
            {
              type: "radiogroup",
              name: "magnacarta",
              title: "What comes next in this series 1,2,5,10,17,26,_?",
              choicesOrder: "random",
              choices: ["52", "29", "37", "31"],
              correctAnswer: "37"
            }
          ]
        }
      ],
      completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
    };
    const survey = new Survey.Model(json);





    return (
      <Survey.Survey
        model={survey}
      />
    );
  }
}

export default SurveyComponent;
