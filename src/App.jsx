import React from 'react';
import useForm from './Hooks/useForm';
import Radio from './Form/Radio';

const App = () => {
  const [resposta, setResposta] = React.useState('');
  const [score, setScore] = React.useState(0);
  const [perguntaNum, setPerguntaNum] = React.useState(0);
  const [erro, setErro] = React.useState(null);

  const perguntas = [
    {
      pergunta: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      resposta: 'React.createElement()',
      id: 'p1',
    },
    {
      pergunta: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: 'p2',
    },
    {
      pergunta: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      resposta: 'useFetch()',
      id: 'p3',
    },
    {
      pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      resposta: 'use',
      id: 'p4',
    },
  ];

  function checarResposta() {
    const resultado = resposta === perguntas[perguntaNum].resposta;
    if (resultado) {
      setScore((score) => score + 1);
      setPerguntaNum((perguntaNum) => perguntaNum + 1);
      setResposta('');
    } else {
      setPerguntaNum((perguntaNum) => perguntaNum + 1);
      setResposta('');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (resposta !== '') {
      checarResposta();
      setErro(null);
    } else {
      console.log('Selecione uma resposta!');
      setErro('Selecione uma resposta!!');
    }
  }

  return (
    <>
      {perguntaNum < perguntas.length && (
        <form onSubmit={handleSubmit}>
          <h1>Pergunta {perguntaNum + 1}</h1>
          <p>{perguntas[perguntaNum].pergunta}</p>
          <Radio
            options={perguntas[perguntaNum].options}
            value={resposta}
            // checked={resposta.includes(resposta)}
            setValue={setResposta}
          />
          <p>{erro}</p>

          <button>Próxima</button>
        </form>
      )}
      {perguntaNum > perguntas.length - 1 && (
        <div>
          <h1>Sua pontuação</h1>
          <p>{score}</p>
        </div>
      )}
    </>
  );
};

export default App;
