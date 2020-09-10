import React from "react";
import './style.scss';

interface Button {
  title?: string,
  action: Function
}


function Button(props: Button) {
  const { title, action } = props;

  return (
    <button className="button" onClick={() => action()}>
      {title}
    </button>
  );
}

export default Button;
