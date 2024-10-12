import React from 'react';
import Input from './Form/Input';
import Select from './Form/Select';
import Radio from './Form/Radio';
import Checkbox from './Form/Checkbox';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [value, setValue] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [linguagens, setLinguagens] = React.useState([]);

  return (
    <>
      <h1>Radio Button</h1>
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />

      <h1>Select</h1>
      <Select
        options={['smartphone', 'notebook']}
        value={value}
        setValue={setValue}
      />

      <h1>Checkbox</h1>
      <Checkbox
        options={['HTML', 'CSS', 'JAVASCRIPT', 'REACT']}
        value={linguagens}
        setValue={setLinguagens}
      />
      <h1>Input</h1>
      <Input id="nome" label="nome" value={nome} setValue={setNome} required />
      <Input id="email" label="Email" value={email} setValue={setEmail} />

      <button>Enviar</button>
    </>
  );
};

export default App;
