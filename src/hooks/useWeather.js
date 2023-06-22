import axios from "axios"
import { useEffect, useState } from "react"


const useWeather = (getLocationState) => {

 
    const [actualWeather, setActualWeather] = useState()
    const [forcast, setForcast] = useState()


    useEffect(() => {
        if (getLocationState !== undefined) {
            const API_KEY = "357a17b062a4d426ffda9f1c704ff186"
            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${getLocationState?.lat}&lon=${getLocationState?.lon}&appid=${API_KEY}`
            axios.get(URL)
                .then(({ data }) => setActualWeather(data))
                .catch(err => console.log(err))
        }
    }, [getLocationState])

    useEffect(() => {
        if (getLocationState !== undefined) {
            const API_KEY1 = "357a17b062a4d426ffda9f1c704ff186"
            const URL1 = `https://api.openweathermap.org/data/2.5/forecast?lat=${getLocationState?.lat}&lon=${getLocationState?.lon}&appid=${API_KEY1}`
            axios.get(URL1)
                .then(({ data }) => setForcast(data.list))
                .catch(err => console.log(err))
        }
    }, [getLocationState])



    return {actualWeather,forcast}
}

export default useWeather