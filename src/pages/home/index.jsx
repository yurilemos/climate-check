import React, { useState } from "react";
import SearchInput from "../../components/searchInput";
import Card from "../../components/card";
import { HomeBody, HomeContent } from "./style";
import WeatherDetails from "./components/weatherDetails";
import useWeather from "./hooks/useWeather";
import { MapComponent } from "./components/mapComponent";
import WeatherForecast from "./components/weatherForecast";


export const Home = () => {  
  
  const [city, setCity] = useState('');

  const { weather, isError, isLoading } = useWeather({address: city});
  

  return (
    <HomeBody>
      <HomeContent>
        <Card>
          <h2>Análise climática</h2>
          <p>Pesquise um endereço</p>
          <SearchInput label="Pesquisar" onSearch={(e)=>{setCity(e)}}/>
        </Card>
        {
          isLoading? 
            <Card>Carregando</Card> 
          : isError ? 
            <Card>erro no sistema</Card>
          : weather ?
            <WeatherDetails weather={weather}/>
          : weather && city ?
            <Card>Cidade inválida</Card>
          :
            <Card>Aguardando o nome da cidade</Card>
        }
        {weather?.list && <WeatherForecast list={weather?.list} />}
        {weather && <MapComponent lat={weather?.lat} lon={weather?.lon}/>}        
      
      </HomeContent>
    </HomeBody>
  );
};
