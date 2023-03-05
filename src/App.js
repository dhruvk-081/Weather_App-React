import "./App.css";
import Home from "./components/Home";
import WeatherData from "./components/WeatherData";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/weather/:city" element={<WeatherData />} />
      <Route path="*" element={<div>🚫Error: ❌Page Not Found.❌</div>} />
    </Routes>
  );
}

export default App;

// API Key: ca365cf5f1cd4922a8940426230403 (https://www.weatherapi.com/)

// f38c69f0c94db265131bf231f7446868 (https://home.openweathermap.org/api_keys)
