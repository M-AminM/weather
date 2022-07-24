import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");
  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=tehran&aqi=no`
      )
      .then((response) => {
        setWeather(response.data);
      })
      .catch((err) => {});
  }, []);

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = () => {
    setInput("");
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${input}&aqi=no`
      )
      .then((response) => {
        setWeather(response.data);
      })
      .catch((err) => {});
  };

  const [temperature, setTemperature] = useState(false);

  const tempHandler = () => {
    setTemperature(!temperature);
  };

  const ButtonAnim = {
    hidden: {
      x: -200,
    },
    show: {
      x: 5,
      transition: {
        duration: 1,
      },
    },
  };

  const LocationAnim = {
    hidden: {
      x: 200,
    },
    show: {
      x: 30,
      transition: {
        duration: 1,
      },
    },
  };

  const slider = {
    hidden: { x: "-130%", skew: "45deg" },
    show: {
      x: "100%",
      skew: "0deg",
      transition: { ease: "easeOut", duration: 1 },
    },
  };

  return (
    <WeatherStyle>
      <Frame variants={slider} initial="hidden" animate="show"></Frame>
      <Buttons variants={ButtonAnim} initial="hidden" animate="show">
        <input value={input} onChange={inputHandler} type="text" />
        <button onClick={submitHandler}>Submit</button>
      </Buttons>
      {weather && (
        <Location variants={LocationAnim} initial="hidden" animate="show">
          <h1 onClick={tempHandler}>
            {!temperature ? weather.current.temp_c : weather.current.temp_f}°
            <h6>{!temperature ? "C" : "F"}</h6>
          </h1>
          <h2>{weather.location.name}</h2>
          <Condition>
            <img src={weather.current.condition.icon} />
            <div>{weather.current.condition.text}</div>
            <div>{weather.current.last_updated}</div>
          </Condition>
        </Location>
      )}
    </WeatherStyle>
  );
};

const WeatherStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20vh;
`;

const Location = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  h1 {
    padding: 2rem;
    font-size: 5rem;
    cursor: pointer;
  }
  h6 {
    display: inline-block;
    font-size: 2rem;
    color: #23d997;
  }
`;

const Condition = styled.div`
  display: flex;
  padding: 0.4rem;
  flex-direction: column;
  align-items: center;

  font-size: 1rem;
  color: gray;
  img {
    width: 70%;
    height: 10vh;
  }
`;

const Buttons = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  input {
    border-radius: 1rem;
    border: 0.1rem solid black;
    height: 6vh;
    width: 100%;
    font-size: 1.5rem;
  }
  button {
    margin-top: 10px;
  }
`;

const Frame = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

export default Weather;
