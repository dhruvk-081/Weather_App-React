import React from "react";
import "./Search.css";

const Search = () => {
  // const [weather, setWeather] = useState(null);
  // const [city, setCity] = useState("Paris");
  // const [value, setValue] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await weatherData(city, units);
  //     setWeather(data);

  //change background dynamically
  // const dynBack = units === "metric" ? 20 : 60;
  // if(data.temp <= dynBack){
  //   setBg();
  // }
  // else {
  //   setBg();
  // }
  //   };
  //   fetchData();
  // }, [units, city]);

  // const onChange = (event) => {
  //   setValue(event.target.value);
  // };

  // const onSearch = (searchTerm) => {
  //   console.log("search", searchTerm);
  //   setCity(searchTerm);
  //   setValue("");
  // };

  return (
    <>
      {/* <div className="search__title">
        <h1>Weather Api</h1>
      </div>
      <div className="search__bar padding">
        <input value={value} onChange={onChange} type="text" placeholder="Enter city here..." />
      </div>
      <div className="search__button padding">
        <button onClick={() => onSearch(value)}>Search...</button>
      </div> */}
    </>
  );
};

export default Search;
