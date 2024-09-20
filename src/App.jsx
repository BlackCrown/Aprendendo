import React from 'react';
import Produto from './Produto';

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const App = () => {
  const [dados, setDados] = React.useState(null);

  function handleClick(event) {
    setDados(event.target.innerText);
    if (dados) localStorage.setItem('produto', dados);
  }

  return (
    <>
      <h1>Preferência: {dados}</h1>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <Produto link={dados} />
    </>
  );
};

export default App;
