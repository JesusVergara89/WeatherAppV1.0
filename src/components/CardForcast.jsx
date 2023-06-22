import React, { useEffect, useState } from 'react'
import clear from '../images/clear.webp'
import few from '../images/few.webp'
import gray from '../images/grayday.jpg'
import rain from '../images/rain.jpg'
import thunder from '../images/thender.webp'
import snow from '../images/snow.webp'

const CardForcast = ({ data, newWeekData, darkMode }) => {
    const [images, setImages] = useState()
    let arrayOfWeather = ["clear sky", "few clouds", "scattered clouds", "broken clouds", "shower rain",
        "rain", "thunderstorm", "snow", "light rain", "overcast clouds"]
    useEffect(() => {
        if (data?.weather[0].description === arrayOfWeather[0]) {
            setImages(clear)
        } else {
            if (data?.weather[0].description === arrayOfWeather[1]) {
                setImages(few)
            } else {
                if (data?.weather[0].description === arrayOfWeather[2]) {
                    setImages(few)
                } else {
                    if (data?.weather[0].description === arrayOfWeather[3]) {
                        setImages(gray)
                    } else {
                        if (data?.weather[0].description === arrayOfWeather[4]) {
                            setImages(rain)
                        } else {
                            if (data?.weather[0].description === arrayOfWeather[5]) {
                                setImages(rain)
                            } else {
                                if (data?.weather[0].description === arrayOfWeather[6]) {
                                    setImages(thunder)
                                } else {
                                    if (data?.weather[0].description === arrayOfWeather[7]) {
                                        setImages(snow)
                                    } else {
                                        if (data?.weather[0].description === arrayOfWeather[8]) {
                                            setImages(rain)
                                        } else {
                                            if (data?.weather[0].description === arrayOfWeather[9]) {
                                                setImages(few)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, [])

    return (
        <article className={darkMode ? "forecast-data-dark"  : "forecast-data"}>
            <img src={images} alt="" className="backgroundimg" />
            <div className="main-data">
                <h3>{newWeekData}</h3>
                <img src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`} alt="" />
                <h3>{data?.weather[0].description}</h3>
            </div>
        </article>
    )
}

export default CardForcast