import React from 'react';
import Produto from './Produto';
import Data from './Fetch';
// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const App = () => {
  const tablet = Data(
    'https://ranekapi.origamid.dev/json/api/produto/tablet',
  ).then((data) => {
    return [
      nome: data.nome,
      id: data.id,
    ]
  });
  return (
    <>
      <Produto
        id={null}
        nome={tablet.nome}
        preco={null}
        descricao={null}
        situacao={null}
      />
    </>
  );
};

export default App;
