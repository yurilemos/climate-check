import React from 'react';
import './style.css'

const CustomInput = ({type,label}) => {
  return (
    <div className="custom-input">
      <label htmlFor="custom-input">{label}</label>
      <input id="custom-input" type={type ?? 'input'} />
    </div>
  );
};

export default CustomInput;