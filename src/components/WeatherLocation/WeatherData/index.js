import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    SNOW,
} from "./../../../constants/weathers";
import './styles.css'


const WeatherData = () => (
    <div className="weatherDataConts">
        <WeatherTemperature 
        temperature={20} 
        weatherState={SNOW}
        />
        <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
    </div>
);

export default WeatherData;