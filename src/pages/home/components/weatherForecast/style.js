import styled from "styled-components";

export const CardContent = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ListContent = styled.div`
  display: flex;
  align-items: center;
  overflow: scroll;
  text-align: center;
`;

export const Container = styled.div`
  flex: 1;
  flexbasis: 0;
  background-color: var(--cor-azul-escuro);
  color: var(--cor-branco);
  border-radius: 10px;
  border: 1px solid;
  width: 142px;
`;

export const ForecastContent = styled.div`
  width: 142px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid;
  border-radius: 10px;
  background-color: var(--cor-azul-claro);
  color: var(--cor-branco);
  width: 140px;

  p {
    width: 130px;
    text-align: center;
  }
`;

export const DescriptionImage = styled.p``;

export const WeatherImage = styled.img`
  width: 40px;
  height: 40px;
`;
