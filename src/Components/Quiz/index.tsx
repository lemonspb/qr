
import React from "react";

import * as Survey from "survey-react";

import "survey-react/survey.css";
import './style.scss';


interface Quiz {
    data: any,
}

const Quiz = (props: Quiz) => {

    const { data } = props



    const surveyValueChanged = function (sender:string, options:string) {
        console.log(sender,options)

    };
    

    return (
        <div className='quiz'>
        <Survey.Survey json={data}
        onValueChanged={surveyValueChanged}
        />
        </div>
    )

}

export default Quiz



