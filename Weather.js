import { useState } from "react";
import fetchWeather from "./fetchWeather"


const Weather=()=>{
    const [query,setQuery]=useState("")
    const [weather,setWeather]=useState({})
    
    const handleChange=(e)=>{
        setQuery(e.target.value)
    }
    const search=async (e)=>{
        if(e.code === 'Enter'){
            const data=await fetchWeather(query)
            setWeather(data)
            setQuery("")
        }
    }

    return(
        <div>

            <input type="text" value={query} onChange={handleChange} onKeyPress={search}/>
            {weather.main &&
            <div id="city">
                {weather.name}
                <span>{weather.sys.country}</span>
                <div id="temp">
                    {weather.main.temp}
                    <span>&deg;</span>
                </div>
                <div id="info">
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
                    <p>{weather.weather[0].description}</p>
                </div>

            </div>
}
        </div>
    )
}
export default Weather;
