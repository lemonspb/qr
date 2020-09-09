import React from "react";
import "./style.scss";
import  Icon from '../Icon';
import Title from '../Title';
import Button from '../Button';

interface WarningContent{
  content: string,
  openImageDialog: Function
}


function WarningContent(props:WarningContent) {
  const { content, openImageDialog } = props;

  return (
    <section className="warning">
      <div className="warning__container">
      <Title
              Tag={'h3'}
              text={content}
              position={'center'}
            />
                    <Icon  type='phone'/>
                    <Button 
                    title='Загрузить фото'
                    action={openImageDialog}
                    />
        <div>
        </div>
      </div>
    </section>
  );
}

export default WarningContent;
