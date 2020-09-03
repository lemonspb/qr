import React from "react";



interface Title{
    text: string,
    className?: string,
    Tag: keyof JSX.IntrinsicElements;
}

const Title = (props:Title) => {
   const { Tag, className, text } = props;

   return (
      <Tag className={className}>
         {text}
      </Tag>
   )

}

export default Title