import React from "react";
import "./App.css"
import Button from './components/Button'
import SetPom from './components/SetPom/SetPom';
import CountdownAnimation from './components/CountDownAnimation';
import {TimerSetting} from './context/TimerSetting'

const App = () => {

  const {
    pomodro,
    executing,
    Animate,
    children,
    startTimer,
  
    pausetimer,
    updateExecute,
    setCurrentTimer,
    resetBtn,
    settingBtn } = React.useContext(TimerSetting)
// eslint-disable-next-line
 React.useEffect(() => {updateExecute(executing)}, [executing, Animate])
     
    
  return (
    <div className="container">
      <h1>Pomodro</h1>
    
      {pomodro !== 0 ?
      <>
        <ul className="labels">
          <li>
            <Button 
              title="Work" 
              activeClass={executing.active === 'work' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('work')} 
            />
          </li>
          <li>
            <Button 
              title="Short Break" 
              activeClass={executing.active === 'short' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('short')} 
            />
          </li>
          <li>
            <Button 
              title="Long Break" 
              activeClass={executing.active === 'long' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('long')} 
            />
          </li>
        </ul>
        <Button title="Settings" _callback={settingBtn} />
        <div className="timer-container">
          <div className="time-wrapper">
              <CountdownAnimation
                key={pomodro}
                timer={pomodro} 
                animate={Animate}
              >
                {children}
              </CountdownAnimation>
          </div>
        </div>
        <div className="button-wrapper">
          <Button title="Start" className={!Animate &&'active'} _callback={startTimer} />
          <Button title="Stop" className={Animate &&'active' } _callback={pausetimer} />
          <Button title="Reset"_callback={resetBtn} />
        </div>
      </> : <SetPom/>}
    </div>
  )
}

export default App