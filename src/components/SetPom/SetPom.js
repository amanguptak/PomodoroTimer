import React,{useState,useContext}from 'react'
import "./SetPom.css"

import {TimerSetting} from '../../context/TimerSetting'
const SetPom=()=> {
    
    const [newtimer,setNewtimer]= useState({
        work:25,
        short:5,
        long:30,
        active:"work"
    })

 
    const {updateExecute}=useContext(TimerSetting)
    const handleChange=(input) => {
        const {name,value} = input.target;
        switch (name) {
            case "work":
                setNewtimer({
                    ...newtimer,
                    work:parseInt(value)
                })
                break;
            case "shortBreak":
                    setNewtimer({
                        ...newtimer,
                        short:parseInt(value)
                    })
                    break;
            case "longBreak":
                        setNewtimer({
                            ...newtimer,
                            long:parseInt(value)
                        })
                        break;
                default:
                    break;
        }
       
    }
    const handleSubmit=(e)=> {
    e.preventDefault();
    updateExecute(newtimer)
   
    }
  return (

    <div className="form-container">

        <form onSubmit={handleSubmit}>
            <div className="inputWrapper">
                <label className="Label">Work</label>
                <input className="inputBox"  name="work" onChange={handleChange} value={newtimer.work} />
                <label className="Label">Short Break</label>
                <input className="inputBox" name="shortBreak"onChange={handleChange} value={newtimer.short} />
                <label className="Label">Long Break</label>
                <input className="inputBox" name="longBreak" onChange={handleChange} value={newtimer.long} />
            </div>
            <button type='submit'>Set timer</button>
        </form>
    </div>
  )
}
export default SetPom;