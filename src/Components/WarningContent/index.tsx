import React from "react";
import "./style.scss";
import  Icon from '../Icon'
interface WarningContent{
  content: string
}


function WarningContent(props:WarningContent) {
  const { content } = props;

  return (
    <section className="warning">
      <div className="warning__container">
        <h3>{content}</h3>
        <div>
        <Icon  type='phone'/>
        </div>
      </div>
    </section>
  );
}

export default WarningContent;
