import React from 'react';

const Produto = (produto) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (dados == 'null') {
      produto = localStorage.getItem('produto');
      setDados(dados);
    }
  }, []);

  React.useEffect(async () => {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${produto}`,
    );
    const json = await response.json();
    setDados(json);
    console.log(json);
  }, [dados]);

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
