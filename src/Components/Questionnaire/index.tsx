
import React, { useEffect } from "react";
import './style.scss';
import {Blank}  from '../../Interfaces';
import * as Survey from "survey-react";
import "survey-react/survey.css";
interface Questionnaire {
    data: any,
}

const Questionnaire = (props: Questionnaire) => {

    const { data } = props

    var myCss = {
        navigation:{
            "complete": 'button'
        }
    };

    const surveyValueChanged = function (sender:any, options:any) {
        console.log(sender,options)
        var el = document.getElementById(options.name);
        if (el) {
            console.log(el,'++++++++++++++')
        }
    };
    

    return (
        <div className='questionnaire'>
        <Survey.Survey json={data}
        css={myCss}
        onValueChanged={surveyValueChanged}
        />
        </div>
    )

}

export default Questionnaire



