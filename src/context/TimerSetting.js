import React from "react";

export const TimerSetting = React.createContext();

const TimerSettingProvider = (props) => {
  const [pomodro, setpomodro] = React.useState(0);
  const [executing, setexcuting] = React.useState({});
  const [Animate, setAnimate] = React.useState(false);

  const updateExecute = (updatedSettings) => {
    setexcuting(updatedSettings);
    setTime(updatedSettings);
  };

  function setCurrentTimer(activeState) {
    updateExecute({
      ...executing,
      active: activeState,
    });
    setTime(executing);
  }

  const setTime = (evaluate) => {
    switch (evaluate.active) {
      case "work":
        setpomodro(evaluate.work)
        break;
      case "short":
        setpomodro(evaluate.short)
        break;
      case "long":
        setpomodro(evaluate.long)
        break;

      default:
        setpomodro(0)
        break;
    }
  };
  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    
    return `${minutes}:${seconds}`;
  
  };

  function startTimer() {
    setAnimate(true);
  }

  function pausetimer() {
    setAnimate(false);
  }

  function stopTimer() {
    setAnimate(false);
  }
  const resetBtn = () => {
    setpomodro(0);
  };

  const settingBtn = () => {
    setpomodro(0);
    setexcuting({});
  };

  return (
    <TimerSetting.Provider
      value={{
        startTimer,
        pausetimer,
        stopTimer,
        resetBtn,
        updateExecute,
        pomodro,
        Animate,
        executing,

        settingBtn,
        setCurrentTimer,

        children,
      }}
    >
      {props.children}
    </TimerSetting.Provider>
  );
};

export default TimerSettingProvider;
