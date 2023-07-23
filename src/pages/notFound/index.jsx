import React from "react";
import { useNavigate } from 'react-router-dom';


export const NotFound = () => {  
const navigate = useNavigate();
  return (
    <div>Rota inválida
      <button onClick={()=>{navigate('/')}}>voltar</button>
    </div>
  );
};
