import styles from "./page.module.css";
import WeatherCard from "./components/WeatherCard";
import WeatherIcon from "./components/weatherIcon";
import Header from "./components/Header";

export default async function Home() {
  const city = "Cairo";
  const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=imperial`;
  
  const request = await fetch(queryURL);
  const weatherData = await request.json();
  console.log(weatherData);

  return ( 
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1>Weather App</h1>
        <WeatherCard city={weatherData.name} 
        currentTemp ={weatherData.main.temp} 
        highTemp={weatherData.main.temp_max} 
        lowTemp ={weatherData.main.temp_min} 
        cloudiness={weatherData.clouds.all} 
        humidity ={weatherData.main.humidity} 
        windspeed={weatherData.wind.speed}
        weatherType = {weatherData.weather[0].main}
        />
      </main>
    </div>

  )
}
