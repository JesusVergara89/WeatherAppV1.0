import React, { useEffect, useState } from 'react'
import '../styles/mainWeather.css'
import clear from '../images/clear.webp'
import few from '../images/few.webp'
import gray from '../images/grayday.jpg'
import rain from '../images/rain.jpg'
import thunder from '../images/thender.webp'
import snow from '../images/snow.webp'

const MainWeather = ({ actualWeather, changeTempe, darkMode }) => {

    const [images, setImages] = useState()

    const [currentD, setCurrentD] = useState()

    let now = new Date()
    let currentDay = now.getDay()

   //console.log(actualWeather)

    let arrayOfWeather = ["clear sky", "few clouds", "scattered clouds", "broken clouds", "shower rain",
        "rain", "thunderstorm", "snow"]

    useEffect(() => {
        if (actualWeather?.weather[0].description === arrayOfWeather[0]) {
            setImages(clear)
        } else {
            if (actualWeather?.weather[0].description === arrayOfWeather[1]) {
                setImages(few)
            } else {
                if (actualWeather?.weather[0].description === arrayOfWeather[2]) {
                    setImages(few)
                } else {
                    if (actualWeather?.weather[0].description === arrayOfWeather[3]) {
                        setImages(gray)
                    } else {
                        if (actualWeather?.weather[0].description === arrayOfWeather[4]) {
                            setImages(rain)
                        } else {
                            if (actualWeather?.weather[0].description === arrayOfWeather[5]) {
                                setImages(rain)
                            } else {
                                if (actualWeather?.weather[0].description === arrayOfWeather[6]) {
                                    setImages(thunder)
                                } else {
                                    if (actualWeather?.weather[0].description === arrayOfWeather[7]) {
                                        setImages(snow)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        if(currentDay === 0){
            setCurrentD("Sunday")
        }else{
            if(currentDay === 1){
                setCurrentD("Monday")
            }else{
                if(currentDay === 2){
                    setCurrentD("Tuesday")
                }else{
                    if(currentDay === 3){
                        setCurrentD("Wednesday")
                    }else{
                        if(currentDay === 4){
                            setCurrentD("Thursday")
                        }else{
                            if(currentDay === 5){
                                setCurrentD("Friday")
                            }else{
                                if(currentDay === 6){
                                    setCurrentD("Saturday")
                                }
                            }
                        }
                    }
                }
            }
        }
    }, [])

    return (
        <article className="current-weather">
            <div className="current-weather-item-1">
                <div className="current-weather-item-1-1">
                    <div className="city">
                        <h3>{actualWeather?.sys.country}</h3>
                        -
                        <h3>{actualWeather?.name}</h3>
                    </div>
                    <div className="current-weather-item-1-1-temperature">
                        <div className="temp-temp">
                            <h3 className='temperature'>{changeTempe ? `${Math.trunc(actualWeather.main.temp - 273.15)} °C` : `${Math.trunc(actualWeather.main.temp)} °K`}</h3>
                        </div>
                        <img src={`https://openweathermap.org/img/wn/${actualWeather?.weather[0].icon}@2x.png`} alt="weather" />
                    </div>
                    <div className="current-weather-item-1-1-climate">
                        <h3 className='description'>{actualWeather?.weather[0].description}</h3>
                    </div>
                </div>
                <div className="current-weather-item-1-2">
                    <div className="current-weather-item-1-2-humidity">
                        <h3><span className='span-wind-humidity'>Humidity</span></h3>
                        <h3>{`${actualWeather?.main.humidity} %`}</h3>
                    </div>
                    <div className="current-weather-item-1-2-wind">
                        <h3><span className='span-wind-humidity'>Wind</span></h3>
                        <h3>{`${actualWeather?.wind.speed} m/s`}</h3>
                    </div>
                </div>
            </div>
            <div className="current-weather-item-2">
                <h3 className={darkMode ? "current-day-dark" : "current-day"}>{currentD}</h3>
                <img src={images} alt="" />
            </div>
        </article>
    )
}

export default MainWeather