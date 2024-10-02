import React from 'react';
import { GlobalContext, GlobalStorage } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((json) => global.setProdutos([...json]));
  }, []);

  return (
    <section>
      {global.produtos.map((produto) => (
        <div className="card" key={produto.id}>
          <h1>
            {produto.nome} - <span>R$ {produto.preco}</span>
          </h1>
          <img src={produto.fotos[0].src} alt="" />
          <p>{produto.descricao}</p>
        </div>
      ))}
    </section>
  );
};

export default Produto;
