import React, { useEffect, useContext, useState } from 'react';

import Quiz from '../../Components/Quiz';
import { QuizContext } from '../../Components/Context';

import './style.scss';

function PageQuiz() {

  const { serviсes } = useContext(QuizContext)
  const [data, setData] = useState('')
  // получаем необходимый id для каждого опроса
  const path = window.location.pathname.split('/')[2]

  useEffect(() => {
    serviсes.getListQuestions(`/${path}`).then((result: string) => {
      setData(result)
    })
  }, [serviсes]);

  return (
    <div className='page-quiz'>

      <div className='page-quiz__wrap'>

        {data ? <Quiz data={data} /> : 'Пусто' }
      </div>
    </div>

  );
}

export default PageQuiz
