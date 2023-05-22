import styled from "styled-components";

export const CardContent = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const WeatherContent = styled.div`
  width: 200px;
  border: 1px solid;
  padding: 0.5rem;
  border-radius: 10px;
  background-color: var(--cor-azul-escuro);
  color: var(--cor-branco);
  p {
    height: 40px;
    align-items: center;
    display: flex;
    background-color: var(--cor-azul-claro);
    border-radius: 8px;
    padding: 0.5rem;
  }
`;

export const DescriptionImage = styled.p`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  flex-wrap: wrap;
`;

export const WeatherImage = styled.img`
  width: 40px;
  height: 40px;
`;
