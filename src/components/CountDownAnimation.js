import React from 'react'
import  {CountdownCircleTimer} from "react-countdown-circle-timer"
import {TimerSetting} from '../context/TimerSetting'

const CountdownAnimation = ({key,timer,animate,children} ) =>{
    const {stopTimer}= React.useContext(TimerSetting)
  return (
    <CountdownCircleTimer
    key={key}
    isPlaying={animate}
    duration={timer*60}
    
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
    strokeWidth={6}
    size={220}
    trailColor="#fefe6b"
    onComplete={ () => {
     
      stopTimer()
    }}
  >
    {children}
    
    
  </CountdownCircleTimer>
 
  )
 
    }
export default CountdownAnimation;