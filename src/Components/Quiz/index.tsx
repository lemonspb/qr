
import React, { useState, useContext } from 'react';
import * as Survey from "survey-react";
import { QuizContext } from '../../Components/Context';
import {Question, IQuiz } from '../../Interfaces';
import "survey-react/survey.css";
import './style.scss';

type QuizProps  = {
    data: IQuiz
}

const Quiz = (props:QuizProps) => {

    const { data } = props

    const { serviсes } = useContext(QuizContext)
    const [questions, setQuestions] = useState<Question[] | undefined>(data.questions)


    const saveStateQuiz = (survey:any) => {
        const res = {
            data: survey.data
        };
        window.localStorage.setItem(`quizid-${data.id}`, JSON.stringify(res));
    }
  
    const loadStateQuiz = (survey:any) => {
        const quizFromLocalStorage = window.localStorage.getItem(`quizid-${data.id}`) || ''
        console.log(quizFromLocalStorage)
        if(quizFromLocalStorage){
           survey.data = JSON.parse(quizFromLocalStorage).data
        }
  }

    const surveyValueChanged = function (sender: any, options: any) {
        console.log(sender.data)
        const  resulQuestionst  = questions!.map((res:Question)=>{
            if(res.name === options.name){
                res.result = options.value
            }
            return res
        })
        setQuestions(resulQuestionst)
        saveStateQuiz(sender)
    };

    const onComplete = function() {
        const newQuestions = questions!.map((res:Question)=> {

            if (res.type === 'html'){
                // перед отправкой удаляем ключ html и добавляем result т.к он обязателен
                delete res.html
                res.result = 'html'
            }
            return res
        })
        setQuestions(newQuestions)
        const sendData = {...data, questions}
        serviсes.sendQuizList(sendData)
        window.localStorage.removeItem(`quizid${data.id}`);
    }
    return (
        <div className='quiz'>
            <Survey.Survey json={data}
                onValueChanged={surveyValueChanged}
                onComplete={onComplete} 
                onAfterRenderSurvey={loadStateQuiz}
            />
        </div>
    )

}

export default Quiz



