import React from "react";

const WeatherData = ({ weather, units, setUnits }) => {
  // const [units, setUnits] = useState("metric");

  // // ℉ button
  // const handleUnit_F = () => {
  //   setUnits("imperial");
  // };

  // // ℃ button
  // const handleUnit_C = () => {
  //   setUnits("metric");
  // };

  return (
    <>
      {/* <div className="App">
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
      </div> */}
    </>
  );
};

export default WeatherData;
