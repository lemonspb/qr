import React, { useEffect, useContext, useState } from 'react';
import { Question, IQuiz } from '../../Interfaces';
import Quiz from '../../Components/Quiz';
import { QuizContext } from '../../Components/Context';
import { Spinner } from '../../Components/Spinner';
import './style.scss';

function PageQuiz() {

  const { serviсes } = useContext(QuizContext)
  const [data, setData] = useState<IQuiz>()
  // получаем необходимый id из pathname каждого опроса
  const path = window.location.pathname.split('/')[2] 
  useEffect(() => {
    serviсes.getQuizList(path).then((result: IQuiz) => {
      delete result.showQuestionNumbers
      result.questions!.map((res: Question) => {
        if (res.type === "rating") {
          /**
           * с бека по умолчанию у всех типов с выбором ответа стоит choices, 
           * потому для типов rating мы удаляем  choices из заменяем его на rateValues
           */
          delete res.choices
          res.rateValues = new Array(10).fill(0).map((_, i) => i + 1)
        }
        if (res.type === "html") {

          // бек не учитывает type:html, потому приходится добавлять его в ручную

          const html = res.title

          res.html = html
        }
      })
      setData(result)

    })
  }, [serviсes, path]);

  return (
    <div className='page-quiz'>
      <div className='page-quiz__wrap'>
        {data ? <Quiz data={data} /> : <div className="page-quiz__loader"><Spinner /></div>}
      </div>
    </div>

  );
}

export default PageQuiz
