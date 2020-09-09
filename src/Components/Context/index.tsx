import React from "react";
import ApplicationServiсes from '../../Services';


export const OrganizationContext = React.createContext({
  serviсes: new ApplicationServiсes()
});

 interface Props {
  children: React.ReactNode
}

export const OrganizationProvider: React.FC<Props> = (props) => {

  const serviсes = new ApplicationServiсes()

  return (
    <OrganizationContext.Provider
      value={{
        serviсes
      }}
    >
      {props.children}
    </OrganizationContext.Provider>
  );
};