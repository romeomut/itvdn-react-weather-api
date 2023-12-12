
import { useState } from "react";
import axios from "axios";

function App() {

  const [data, setData] = useState({})
  const [town, setTown] = useState('')

  const key = 'd1c1410bdd14700597da266f92f29efa'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${town}&units=metric&appid=${key}`

  const searchWeather = (e) =>{
    if (e.key === 'Enter') {

      // fetch(url)
      // .then((response) => response.json())
      // .then((response) => {setData(response)})

      axios.get(url).then((response) => {setData(response.data)})

      setTown('')
    }
  }

  return (
    <div className="app">
      <div className="inp-field">
        <input type="text" onChange={(e) => setTown(e.target.value)} placeholder="Enter location" onKeyDown={searchWeather}/>
      </div>

        <div className="container">
          <div className="header">
            <div className="city">
              <p>{data.name}</p>
            </div>
            <div className="temp">
                {data.main ? 
                <h1>{data.main.temp.toFixed(0)}°C</h1> : null}
              </div>
              <div className="desc">
                {data.weather ? 
                <p>{data.weather[0].main}</p> : null}
              </div>
          </div>
        </div>
          {data.name !== undefined &&
          (
            <div className="footer">
              <div className="feels">
                <p className="bold">
                  Відчувається: {data.main.feels_like.toFixed()}
                </p>
              </div>
              <div className="humidity">
                <p className="bold">
                  Вологість: {data.main.humidity}%
                </p>
              </div>
              <div className="wind">
                <p className="bold">
                  {`Вітер: ${data.wind.speed} м/с`}
                </p>
              </div>
            </div>
          )}
    </div>
  );
}

export default App;
