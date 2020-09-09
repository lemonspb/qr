import React from 'react';
import Title from '../../Components/Title'
import * as Survey from "survey-react"
import "survey-react/survey.css"
import {mockupFirst} from '../../Mockups'
import './style.scss'
function PageQuestions() {
  var mycustomSurveyStrings = {
    pagePrevText: "My Page Prev",
    pageNextText: "My Page Next",
    completeText: "OK - Press to Complete"
};
Survey
    .surveyLocalization
    .locales["ru"] = mycustomSurveyStrings;

  return (
    <div className='page-questions'>
      <Title 
      Tag='h2'
      text='Опрос удовлетворенности пациента условиями оказания медицинской помощи'
      position='center'
      />
      <div className='page-questions__wrap'>

         <Survey.Survey
        json={mockupFirst}
      />
        </div>
    </div>

  );
}

export default PageQuestions
