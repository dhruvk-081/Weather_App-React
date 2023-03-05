import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");

  // search
  const onChange = (event) => {
    setCity(event.target.value);
  };

  const onSearch = () => {
    // console.log("search", searchTerm);
    if (city !== "") {
      navigate(`/weather/${city}`);
    } else {
      alert("input feild empty");
    }
  };

  return (
    <>
      <div className="searchContainer">
        <div className="heading">
          <h1>Weather Api</h1>
        </div>
        <input value={city} onChange={onChange} type="text" placeholder="Enter City Name Here..." />
        <br />
        <button onClick={onSearch}>Search...</button>
      </div>
    </>
  );
};

export default Home;
