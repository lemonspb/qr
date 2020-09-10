import React from "react";
import ApplicationServiсes from '../../Services';


export const QuizContext = React.createContext({
  serviсes: new ApplicationServiсes()
});

 interface Props {
  children: React.ReactNode
}

export const QuizProvider: React.FC<Props> = (props) => {

  const serviсes = new ApplicationServiсes()

  return (
    <QuizContext.Provider
      value={{
        serviсes
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};