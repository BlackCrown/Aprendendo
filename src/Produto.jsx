import React from 'react';

const Produto = ({ id, nome, preco, descricao, situacao }) => {
  return (
    <div className={situacao} key={id}>
      <h3>{nome} Nome</h3>
      <span>{preco}</span>
      <p>{descricao}</p>
    </div>
  );
};

export default Produto;
