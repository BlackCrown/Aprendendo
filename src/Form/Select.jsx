import React from 'react';

const Select = ({ options, value, setValue }) => {
  return (
    <select value={value} onChange={({ target }) => setValue(target.value)}>
      <option value="" disabled>
        Selecione
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}

      <option value="smartphone">smartphone</option>
    </select>
  );
};

export default Select;
