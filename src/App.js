import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function App() {
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
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${input}&aqi=no`
      )
      .then((response) => {
        setWeather(response.data);
      })
      .catch((err) => {});
  };

  console.log(weather);

  return (
    <AppStyle>
      {weather && (
        <div>
          <Location>
            <h1>{weather.current.temp_f}</h1>
            <h2>{weather.location.name}</h2>

            <Condition>
              <img src={weather.current.condition.icon} />
              <div>{weather.current.condition.text}</div>
              <div>{weather.current.last_updated}</div>
            </Condition>
          </Location>
        </div>
      )}
      <Buttons>
        <input onChange={inputHandler} type="text" />
        <button onClick={submitHandler}>Submit</button>
      </Buttons>
    </AppStyle>
  );
}

const AppStyle = styled.div``;

const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    padding: 2rem;
    font-size: 4rem;
  }
  h2 {
    font-size: 2rem;
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

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
