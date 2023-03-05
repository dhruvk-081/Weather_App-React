import React from "react";
import { useParams } from "react-router-dom";
import { WeatherApi } from "../WeatherApi";
import { useState, useEffect } from "react";
import Description from "./Description";

const WeatherData = () => {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  // const [bg, setBg] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await WeatherApi(city, units);
      setWeather(data);

      //change background dynamically
      // const dynBack = units === "metric" ? 20 : 60;
      // if(data.temp <= dynBack){
      //   setBg();
      // }
      // else {
      //   setBg();
      // }
    };
    fetchData();
  }, [units, city]);

  // ℉ button
  const handleUnit_F = () => {
    setUnits("imperial");
  };

  // ℃ button
  const handleUnit_C = () => {
    setUnits("metric");
  };

  return (
    <>
      <div className="App">
        <h1>Weather Data</h1>
        {weather && (
          <div>
            <div className="temp-button">
              <button onClick={handleUnit_F}>°F</button>
              <button onClick={(e) => handleUnit_C(e)}>°C</button>
            </div>

            <div className="section section_temperature">
              <div className="icon">
                <h3>Location</h3>
                <h4>{`${weather.name}, ${weather.country}`}</h4>
                <img src={weather.iconImage} alt="" />
                <h3>{weather.description}</h3>
              </div>

              <div className="temperature">
                <h1>{`${weather.temp} °${units === "metric" ? "C" : "F"}`}</h1>
              </div>
            </div>
            <Description weather={weather} units={units} />
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherData;
