import React from 'react';
import './style.css'

const CustomInput = ({children}) => {
  return (
    <div className="custom-input">
      {children}
    </div>
  );
};

export default CustomInput;