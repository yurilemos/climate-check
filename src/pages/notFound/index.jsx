import React from "react";
import { useNavigate } from 'react-router-dom';


export const NotFound = () => {  
const navigate = useNavigate();
  return (
    <div>Rota inválida
      <button onClick={()=>{navigate('/climate-check/')}}>voltar</button>
    </div>
  );
};
