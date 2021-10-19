import React, { Component } from "react";


import * as Survey from "survey-react";



import "survey-react/modern.css";
import "./index.css";
import axios from "axios";

Survey.StylesManager.applyTheme("modern");

class SurveyComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    //keeping for future reference
    // fetch('./question-bank.json'
    //   , {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //     }
    //   }
    // )
    axios.get('./question-bank.json')
      .then((j) => {
        console.log('check', j.data);
        return JSON.parse(JSON.stringify(j.data));
      })
      .then((questions) => {
        console.log(questions);
        this.setState({ data: questions });
      });
  }
  render() {



    let baseSurvey = {
      title: "Fundamental Mathematics Quiz",
      showProgressBar: "bottom",
      showTimerPanel: "top",
      maxTimeToFinishPage: 10,
      maxTimeToFinish: 25,
      firstPageIsStarted: true,
      startSurveyText: "Start Quiz",
      pages: [{
        questions: [
          {
            type: "html",
            html: "You are about to start Test. <br/>You have 10 seconds for every page and 25 seconds for the whole quiz of 3 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
          }
        ]
      }],
      completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
    };
    baseSurvey.pages.push(...this.state.data);
    const survey = new Survey.Model(baseSurvey);




    return (
      <Survey.Survey
        model={survey}
      />
    );
  }
}

export default SurveyComponent;
