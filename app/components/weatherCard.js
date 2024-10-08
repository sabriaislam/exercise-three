import WeatherIcon from "./weatherIcon";
// import styles from "../page.module.css";

export default function WeatherCard({ city, currentTemp, highTemp, lowTemp, cloudiness, humidity, windspeed, weatherType }){
    return <div>
        <h2>City: {city}</h2>
        <p> Current Temperature: {currentTemp}</p>
        <p> High: {highTemp}</p>
        <p> Low: {lowTemp}</p>
        <p> Cloudiness: {cloudiness}</p>
        <p> Humidity: {humidity}</p>
        <p> Windspeed {windspeed}</p>
        weatherType = {weatherType}
        <WeatherIcon weatherType= {weatherType}/>
    </div>
}

