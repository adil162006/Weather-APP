import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';


export default function WeatherApp() {
    const [weatherData, setWeatherData] = useState({
        city:"delhi",
    temp: 28.5,               // Current temperature in °C
    temMax: 31.2,             // Max temperature in °C
    temMin: 24.1,             // Min temperature in °C
    humidity: 65,             // Humidity in percentage
    feelsLike: 30.0,          // Feels like temperature in °C
    weather: "Partly cloudy"
    });

    let updateInfo = (newInfo)=>{
        setWeatherData(newInfo);
    }



    return(
        <div>
            <h1 style={{textAlign: "center", marginTop: "20px"}}>
                Weather App
            </h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info = {weatherData}/>
        </div>
    )
}