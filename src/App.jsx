import React from 'react';
import Produto from './Produto';

// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

const App = () => {
  const [cores, setCores] = React.useState([]);
  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

  function handleChange({ target }) {
    if (cores.includes(target.value)) {
      setCores(cores.filter((cor) => cor !== target.value));
    } else {
      setCores([...cores, target.value]);
    }
    console.log(cores);
  }

  return (
    <>
      <form>
        {coresArray.map((cor) => (
          <label key={cor}>
            <input type="checkbox" value={cor} onChange={handleChange} />
            {cor}
          </label>
        ))}
      </form>
    </>
  );
};

export default App;
