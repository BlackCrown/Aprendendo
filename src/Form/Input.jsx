import React from 'react';

const Input = ({
  id,
  label,
  name,
  setValue,
  value,
  onChange,
  type,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        type={type}
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;
