import React, { useState } from 'react'
import './Weatherapp.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import logo from '../assets/weatherwiz.png'
import.meta.env.VITE_API_KEY;

const weatherapp = () => {
    const [wicon, setWicon] = useState(cloud_icon);
    const search = async () => {
        const element = document.getElementsByClassName("city");
        if (element[0].value === "") {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${import.meta.env.VITE_API_KEY}`;
        let response = await fetch(url);
        let data = await response.json();

        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temperature = document.getElementsByClassName("temp");
        const location = document.getElementsByClassName("location");

        humidity[0].innerHTML = data.main.humidity + " %";
        wind[0].innerHTML = data.wind.speed + " km/h";
        temperature[0].innerHTML = data.main.temp + "&#176C";
        location[0].innerHTML = data.name;


        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
            setWicon(clear_icon);
        }
        else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
            setWicon(cloud_icon);
        }
        else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
            setWicon(drizzle_icon);
        }
        else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
            setWicon(drizzle_icon);
        }
        else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
            setWicon(rain_icon);
        }
        else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
            setWicon(rain_icon);
        }
        else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
            setWicon(snow_icon);
        }
        else {
            setWicon(clear_icon);
        }

    }
    return (
        <>

            <div className="logo-container">
                <img src={clear_icon} alt="Logo" className="logo" style={{ width: '80px', height: '80px' }} />
                <p className="white-text">Weatherwiz</p>
            </div>
            <div className="container">

                <div className="top-bar">
                    <input type="text" className="city" placeholder='City' />
                    <div className="search-icon" onClick={search}>
                        <img src={search_icon} alt="" />
                    </div>
                </div>
                <div className="weather-img">
                    <img src={wicon} alt="" />
                </div>
                <div className="temp">24&#176;C</div>
                <div className="location">London</div>
                <div className="data-container">
                    <div className="element">
                        <img src={humidity_icon} alt="" />
                        <div className="data">
                            <div className="humidity-percent">64%</div>
                            <div className="text">Humidity</div>
                        </div>

                    </div>

                    <div className="element">
                        <img src={wind_icon} alt="" />
                        <div className="data">
                            <div className="wind-rate">18 km/h</div>
                            <div className="text">Wind Speed</div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default weatherapp
