import React from 'react';

const Input = ({ id, label, name, setValue, value, ...props }) => {
  return (
    <>
      <label>{id}</label>
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  );
};

export default Input;
