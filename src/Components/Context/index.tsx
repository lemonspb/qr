import React from "react";
import ApplicationServiсes from '../../Services';


export const QuestioningContext = React.createContext({
  serviсes: new ApplicationServiсes()
});

 interface Props {
  children: React.ReactNode
}

export const QuestioningProvider: React.FC<Props> = (props) => {

  const serviсes = new ApplicationServiсes()

  return (
    <QuestioningContext.Provider
      value={{
        serviсes
      }}
    >
      {props.children}
    </QuestioningContext.Provider>
  );
};