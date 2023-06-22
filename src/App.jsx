import { useEffect, useState } from 'react';
import './App.css'
import useWeather from './hooks/useWeather';
import MainWeather from './components/MainWeather';
import Forecast from './components/Forecast';
import LoadingScreen from './components/LoadingScreen';
import { Helmet } from 'react-helmet';

function App() {

  const [getLocationState, setGetLocationState] = useState()

  const [changeTempe, setChangeTempe] = useState()

  const [darkMode, setDarkMode] = useState(false)

  const getLocation = () => {

    const succes = pos => {
      const crd = pos.coords;
      let lat = crd.latitude
      let lon = crd.longitude

      setGetLocationState({ lat, lon })
    }

    navigator.geolocation.getCurrentPosition(succes)
  }

  const { actualWeather, forcast } = useWeather(getLocationState)

  const functionChangeTemperature = () => {
    setChangeTempe(!changeTempe)
  }

  let getDataHours = new Date()

  let hour = getDataHours.getHours()
  let minutes = getDataHours.getMinutes()

  useEffect(() => {
    getLocation()
    if (hour >= 18 && hour <= 24) {
      setDarkMode(true)
    } else {
      if (hour >= 0 && hour <= 6) {
        setDarkMode(true)
      } else {
        setDarkMode(false)
      }
    }
  }, [])

  //console.log(hour)
 // console.log(minutes)
  //console.log(darkMode)

  return (
    <div className={darkMode ? 'App-dark' : 'App'}>

      {forcast ?
        <article className={darkMode ? "Main-body-dark" : "Main-body"}>
          <Helmet>
            <style>{darkMode ? 'body { background-color: #0D1B2A; }' : 'body { background-color: #EDEDE9; }'}</style>
          </Helmet>
          <MainWeather
            actualWeather={actualWeather}
            changeTempe={changeTempe}
            darkMode={darkMode}
          />
          <button className={darkMode ? 'btn-temp-dark' : 'btn-temp'} onClick={functionChangeTemperature}>{changeTempe ? "To Kelvin" : "To celcius"}</button>
          <Forecast
            forcast={forcast}
            darkMode={darkMode}
          />
        </article>
        :
        <LoadingScreen
        />
      }

    </div>
  )
}

export default App
