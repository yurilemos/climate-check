import React from 'react';
import Card from '../../../../components/card/index.jsx';
import { DescriptionImage, WeatherImage, ForecastContent, ListContent, Container } from './style.js';
import { formatDate, getHour } from '../../../../utils/dateHandling.js';

const WeatherForecast = ({list}) => {  
  return (
    <Card>
      <div>
        <p>Aqui os índices para os próximos dias em determinados horários:</p>
        <h3>{formatDate(list[0].dt_txt)}</h3>
        <ListContent>
          {
            list?.slice(0, 8)?.map((l) =>             
              <Container>
                <h4>{getHour(l?.dt_txt)} Horas</h4>
                <ForecastContent>
                  <p>{l?.main?.temp} °C</p>              
                  <DescriptionImage>                  
                    {l?.weather[0]?.description}                    
                  </DescriptionImage>
                  <WeatherImage src={`http://openweathermap.org/img/wn/${l?.weather[0]?.icon}.png`} alt="descrição" />
                </ForecastContent>
              </Container>
            )
          } 
        </ListContent>  
        <h3>{formatDate(list[9].dt_txt)}</h3>
        <ListContent>
          {
            list?.slice(8, 16)?.map((l) =>             
              <Container>
                <h4>{getHour(l?.dt_txt)} Horas</h4>
                <ForecastContent>
                  <p>{l?.main?.temp} °C</p>              
                  <DescriptionImage>                  
                    {l?.weather[0]?.description}                    
                  </DescriptionImage>
                  <WeatherImage src={`http://openweathermap.org/img/wn/${l?.weather[0]?.icon}.png`} alt="descrição" />
                </ForecastContent>
              </Container>
            )
          } 
        </ListContent>
        <h3>{formatDate(list[17].dt_txt)}</h3>
        <ListContent>
          {
            list?.slice(16, 24)?.map((l) =>             
              <Container>
                <h4>{getHour(l?.dt_txt)} Horas</h4>
                <ForecastContent>
                  <p>{l?.main?.temp} °C</p>              
                  <DescriptionImage>                  
                    {l?.weather[0]?.description}                    
                  </DescriptionImage>
                  <WeatherImage src={`http://openweathermap.org/img/wn/${l?.weather[0]?.icon}.png`} alt="descrição" />
                </ForecastContent>
              </Container>
            )
          } 
        </ListContent>
        <h3>{formatDate(list[25].dt_txt)}</h3>
        <ListContent>
          {
            list?.slice(24, 32)?.map((l) =>             
              <Container>
                <h4>{getHour(l?.dt_txt)} Horas</h4>
                <ForecastContent>
                  <p>{l?.main?.temp} °C</p>              
                  <DescriptionImage>                  
                    {l?.weather[0]?.description}                    
                  </DescriptionImage>
                  <WeatherImage src={`http://openweathermap.org/img/wn/${l?.weather[0]?.icon}.png`} alt="descrição" />
                </ForecastContent>
              </Container>
            )
          } 
        </ListContent>
        <h3>{formatDate(list[33].dt_txt)}</h3>
        <ListContent>
          {
            list?.slice(32, 40)?.map((l) =>             
              <Container>
                <h4>{getHour(l?.dt_txt)} Horas</h4>
                <ForecastContent>
                  <p>{l?.main?.temp} °C</p>              
                  <DescriptionImage>                  
                    {l?.weather[0]?.description}                    
                  </DescriptionImage>
                  <WeatherImage src={`http://openweathermap.org/img/wn/${l?.weather[0]?.icon}.png`} alt="descrição" />
                </ForecastContent>
              </Container>
            )
          } 
        </ListContent>     
                    
      </div>
    </Card>
  );
};

export default WeatherForecast;