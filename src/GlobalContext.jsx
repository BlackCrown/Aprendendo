import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [produtos, setProdutos] = React.useState([]);

  function limparDados() {
    setProdutos(null);
  }

  return (
    <GlobalContext.Provider value={{ produtos, setProdutos, limparDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
