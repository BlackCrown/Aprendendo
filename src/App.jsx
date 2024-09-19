import React from 'react';

const App = () => {
  const [contar, setContar] = React.useState(0);
  let randomColor = null;

  // useEffect é uma funcao que contem dependencias '[]', sem dependencias o cotigo em seu interior é sempre utilizado toda vez q a mesma é chamada
  React.useEffect(() => {});

  // Com uma dependencia vazia o cotigo em seu interior é executado apenas 1 vez, na renderização da pagina
  React.useEffect(() => {
    console.log('useEffect apenas 1 vez');
  }, []);

  // Com uma dependencia a funcao sera executada sempre que ouver uma mudança na dependencia
  React.useEffect(() => {
    document.title = 'UseEffect ' + contar;
  }, [contar]);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

export default App;
