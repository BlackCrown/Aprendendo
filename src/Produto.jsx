import React from 'react';

const Produto = ({ dados }) => {
  return (
    <div className={dados.vendido} key={dados.id}>
      <h3>{dados.nome}</h3>
      <img src={dados.fotos[0].src} alt={dados.fotos[1].alt} />
      <span>{`R$ ${dados.preco}`}</span>
      <p>{dados.descricao}</p>
    </div>
  );
};

export default Produto;
