import React from "react";
import { Phone } from "../../Assets/Icons/svg";
import "./style.scss";

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
          <Phone />
        </div>
      </div>
    </section>
  );
}

export default WarningContent;
