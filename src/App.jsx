import React from 'react';
import Input from './Form/Input';
import Select from './Form/Select';
import Radio from './Form/Radio';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [value, setValue] = React.useState('');
  const [cor, setCor] = React.useState('');

  return (
    <>
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />

      <Select
        options={['smartphone', 'notebook']}
        value={value}
        setValue={setValue}
      />

      <Input id="nome" label="nome" value={nome} setValue={setNome} required />
      <Input id="email" label="Email" value={email} setValue={setEmail} />

      <button>Enviar</button>
    </>
  );
};

export default App;
