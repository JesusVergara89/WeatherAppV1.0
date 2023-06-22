import React from 'react'
import { Waveform } from '@uiball/loaders'

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <Waveform
        size={40}
        lineWeight={3.5}
        speed={1}
        color="black"
      />
    </div>
  )
}

export default LoadingScreen