import React from 'react';
import './style.css'

const CustomInput = () => {
  return (
    <div className="custom-input">
      <label htmlFor="custom-input">Nome</label>
      <input id="custom-input" type="text" />
    </div>
  );
};

export default CustomInput;