import React from 'react';
import './style.css'

const CustomInput = ({children}) => {
  return (
    <div className="card-component">
      {children}
    </div>
  );
};

export default CustomInput;