import React, { useEffect, useContext, useState } from 'react';

import Quiz from '../../Components/Quiz';
import { QuizContext } from '../../Components/Context';
import {mockupFirst} from '../../Mockups';
import { Spinner } from '../../Components/Spiner'

import './style.scss';

function PageQuiz() {

  const { serviсes } = useContext(QuizContext)
  const [data, setData] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  // получаем необходимый id для каждого опроса
  const path = window.location.pathname.split('/')[2]

  useEffect(() => {
    setIsLoading(true)
    serviсes.getListQuestions(`/${path}`).then((result: string) => {
      setData(result)
      if(result === '404'){
        setData('')
        setIsLoading(false)
      }
    })
  }, [serviсes,path]);

  return (
    <div className='page-quiz'>
      <div className='page-quiz__wrap'>
        {data ?  <Quiz data={data} /> : <Spinner />
 }
      </div>
    </div>

  );
}

export default PageQuiz
