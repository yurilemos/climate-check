import { useQuery } from 'react-query';
import axios from 'axios';

export const useWeather = ({ address }) => {
  const API_KEY = process.env.REACT_APP_API_WEATHER_KEY;  
  

  const getLocationWeather = async () => {    
    // Get latitude & longitude from address.
    const responseForAddress = await axios.get(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        address
      )}&format=json&limit=1`)
    const {lat, lon, display_name} = responseForAddress?.data[0];        
    const responseNow = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}&lang=pt_br`
    );

    const responseFuture = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}&lang=pt_br`
    );

    const { list } = responseFuture?.data;

    console.log(list);

    
    return {...responseNow?.data, adress: display_name, lat, lon, list};
  };

  const {
    isLoading,
    isSuccess,
    isError,
    isIdle,
    data: weather,
    refetch,
  } = useQuery(['weather', address], getLocationWeather, {
    enabled: !!address,
    retry: false,    
  });

  return {
    isLoading,
    isError,
    isIdle,
    isSuccess,
    weather,
    getLocationWeather,
    refetch,
  };
};

export default useWeather;
