import React from 'react';

const App = () => {
  const [contar, setContar] = React.useState(0);

  console.log('Executou Fora!!');
  React.useEffect(() => {
    console.log('useEffect');
  }, []);
  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

export default App;
