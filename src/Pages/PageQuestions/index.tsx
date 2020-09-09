import React from 'react';
import Title from '../../Components/Title'
import Questionnaire from '../../Components/Questionnaire'
import {mockupFirst} from '../../Mockups'

import './style.scss'
function PageQuestions() {



  return (
    <div className='page-questions'>
      <div className='page-questions__wrap'>

        <Questionnaire  data={mockupFirst} />
        </div>
    </div>

  );
}

export default PageQuestions
