import React from 'react';

const Produto = ({ produto }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (produto !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
    }
  }, [produto]);

  console.log(dados);
  if (dados === null) return null;
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
      <div>
        <img
          style={{
            maxHeight: '60vh',
            borderRadius: '180px',
            border: '4px, solid, black',
          }}
          src={dados.fotos[0].src}
          alt=""
        />
      </div>
    </div>
  );
};

export default Produto;
