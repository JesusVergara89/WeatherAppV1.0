import React, { useEffect, useState } from 'react'
import '../styles/forecast.css'
import CardForcast from './CardForcast'

const Forecast = ({ forcast,darkMode }) => {
  //console.log(forcast)
  let fiveDays = forcast.slice(0, 5)
  // console.log(fiveDays)
  const [newWeek, setNewWeek] = useState()
  let now = new Date()
  let currentDay = now.getDay()

  // console.log(currentDay)

  useEffect(() => {
    if (currentDay === 0) {
      let array1 = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
      setNewWeek(array1)
    } else {
      if (currentDay === 1) {
        let array2 = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        setNewWeek(array2)
      } else {
        if (currentDay === 2) {
          let array3 = ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
          setNewWeek(array3)
        } else {
          if (currentDay === 3) {
            let array4 = ["Thursday", "Friday", "Saturday", "Sunday", "Monday"]
            setNewWeek(array4)
          } else {
            if (currentDay === 4) {
              let array5 = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday"]
              setNewWeek(array5)
            } else {
              if (currentDay === 5) {
                let array6 = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"]
                setNewWeek(array6)
              } else {
                if (currentDay === 6) {
                  let array7 = ["Thursday", "Friday", "Saturday", "Sunday", "Monday"]
                  setNewWeek(array7)
                }
              }
            }
          }
        }
      }
    }
  }, [])
  let newWeekData = []
  if (newWeek) {
    newWeekData = newWeek
  } else {
    newWeekData = ["wait for data", "wait for data", "wait for data", "wait for data", "wait for data"]
  }
  return (
    <article className="forecast">
      {
        fiveDays?.map((data, index) => (
          <CardForcast
            newWeekData={newWeekData[index]}
            key={index}
            data={data}
            darkMode={darkMode}
          />

        ))
      }

    </article>
  )
}

export default Forecast