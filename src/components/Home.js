import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";
import Description from "./Description";
import { weatherData } from "../WeatherApi";
// import Search from "./Search";

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [city, setCity] = useState({});
  const [value, setValue] = useState("");
  // const [bg, setBg] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await weatherData(city, units);
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

  // search
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    console.log("search", searchTerm);
    setCity(searchTerm);
    setValue("");
  };

  return (
    <>
      <div className="searchContainer">
        <div className="heading">
          <h1>Weather Api</h1>
        </div>
        <input value={value} onChange={onChange} type="text" placeholder="Enter City Name Here..." />
        <br />
        <button onClick={() => onSearch(value)}>Search...</button>
      </div>
      <div className="App">
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

export default Home;
