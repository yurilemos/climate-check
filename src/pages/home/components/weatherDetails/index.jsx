import React from 'react';
import Card from '../../../../components/card/index.jsx';
import { CardContent, WeatherContent, DescriptionImage, WeatherImage } from './style.js';

const WeatherDetails = ({weather}) => {  
  return (
    <Card>
      <p>Aqui os índices para hoje:</p>
      <CardContent>        
        <WeatherContent>
          <h4>Cidade:</h4>
          <DescriptionImage>
            {weather?.name} 
            <img src={`https://flagsapi.com/${weather?.sys?.country}/flat/32.png`} alt="país" />
          </DescriptionImage>          
        </WeatherContent>
        <WeatherContent>
          <h4>Temperatura:</h4>
          <p>{weather?.main?.temp} °C</p>
        </WeatherContent>
        <WeatherContent>
          <h4>Sensação térmica:</h4>
          <p>{weather?.main?.feels_like} °C</p>
        </WeatherContent>
        <WeatherContent>
          <h4>Umidade:</h4>
          <p>{weather?.main?.humidity} %</p>
        </WeatherContent>
        <WeatherContent>
          <h4>Descrição:</h4>
          <DescriptionImage>
            {weather?.weather[0]?.description}
            <WeatherImage src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}.png`} alt="descrição" />
          </DescriptionImage>
          
        </WeatherContent>            
      </CardContent>
    </Card>
  );
};

export default WeatherDetails;