
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
    const surveyValueChanged = function (sender: any, options: any) {
        const  resulQuestionst  = questions!.map((res:Question)=>{
            if(res.name === options.name){
                res.result = options.value
            }
            return res
        })
        setQuestions(resulQuestionst)
        console.log(questions)
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
    }
    return (
        <div className='quiz'>
            <Survey.Survey json={data}
                onValueChanged={surveyValueChanged}
                onComplete={onComplete} 
            
            />
        </div>
    )

}

export default Quiz



