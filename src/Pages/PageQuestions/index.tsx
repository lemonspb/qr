import React, {useEffect,useContext, useState} from 'react';
import Questionnaire from '../../Components/Questionnaire';
import {mockupFirst} from '../../Mockups';
import {QuestioningContext} from '../../Components/Context';
import './style.scss'
import { useHistory } from "react-router-dom"

function PageQuestions() {

  const {serviсes} = useContext(QuestioningContext) 
  const [data, setData] = useState('')
  const history = useHistory();

console.log(window.location.pathname.split('/')[2])

  useEffect(() => {
    serviсes.getListQuestions(`/${window.location.pathname.split('/')[2]}`).then((result:any) => {
      setData(result)
    })
}, [serviсes]);

  return (
    <div className='page-questions'>
  
      <div className='page-questions__wrap'>

        {data && <Questionnaire  data={data} />}   
        </div>
    </div>

  );
}

export default PageQuestions
