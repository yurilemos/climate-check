import React from 'react';
import './style.css'

const CustomInput = ({type,label}) => {
  return (
    <div className="custom-input">
      <label htmlFor="custom-input">Nome</label>
      <input id="custom-input" type="text" />
    </div>
  );
};

export default CustomInput;