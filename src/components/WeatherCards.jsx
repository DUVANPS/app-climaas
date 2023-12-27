import { useState } from "react"
import './WeatherCard.css'


const WeatherCards = ({ weather, tem }) => {
    const [isCelcius, setIsCelcius] = useState(true)

    const handleChangeTem = () => {
        setIsCelcius(state => !state)

    }


    return (
        <article className="weather">
            <h1 className="weather_title">Weather App</h1>
            <h2 className="weather_subtitle">{weather?.name}, {weather?.sys.country}</h2>
            <section className="weather_body">
                <header className="weather_img">
                    <img
                        className="weather_icon"
                        src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="icon cloud"
                    />
                </header>
                <article className="weather_info">
                    <h3 className="weather_info_title">"{weather?.weather[0].description}"</h3>
                    <ul className="weather_list">
                        <li className="weather_item"><span className="weather_label">Wind Speed</span><span className="weather_value">{weather?.wind.speed} m/s</span></li>
                        <li className="weather_item"><span className="weather_label">Clouds</span><span className="weather_value">{weather?.clouds.all} %</span></li>
                        <li className="weather_item"><span className="weather_label">Pressure</span><span className="weather_value">{weather?.main.pressure} hPa</span></li>
                    </ul>
                </article>
            </section>
            <footer className="weather_footer">
                <h2 className="weather_temp">{isCelcius ? `${tem?.celsius} °C` : `${tem?.fahrenheit} °F`}</h2>
                <button onClick={handleChangeTem} className="weather_btn">Change Temp</button>
            </footer>
        </article>
    )
}

export default WeatherCards