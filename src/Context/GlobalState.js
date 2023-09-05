import {createContext, useState} from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = props => {
  const [pressedId, setPressedId] = useState(1);
  return (
    <GlobalContext.Provider
      value={{
        pressedId,
        setPressedId,
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
