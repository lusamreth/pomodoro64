import React, { useReducer,useEffect, useState } from 'react';
import './parallax.css'
import { Link} from 'react-router-dom'
function Timer(prop){

    const [secondCounter, setsecondCounter] = useState(prop.seconds || 0)
    const [mintueCounter, setminuteCounter] = useState(prop.minutes)

    const [paused , setPaused] = useState(true)
    useEffect(() => {
        // will run this block when counter value change 
        // therefore it is exactly 1 second and will re-render
        let timer = setTimeout(() => {

            if (!paused) {
                if (secondCounter === 0) {
                    setminuteCounter( m => m - 1 )
                    setsecondCounter(59)
                }else {

                    setsecondCounter(c => c - 1)
                }
            }
        },1000)
        return () => clearTimeout(timer);
    },[secondCounter,paused])    
    
    function runTimer(){
        setPaused(!paused) 
    }


    return (
        <div className="timer-wrapper center">
            <h1 className='timer'>{`${mintueCounter}:${secondCounter}${secondCounter  < 10 ? '0' :'' }`}</h1>
            <button className="pomodero-btn" onClick={() => runTimer()}>{ paused? "START" : "PAUSE" }</button>
        </div>
    )
}

function PomBtn(prop){


}


function Parallax(){
    const [isBreak, setBreak] = useState(false); 

    const POMEDORO_DURATION  = 20
    const SHORT_DURATION  = 5
    const LONG_DURATION = 15

    const initialState = { POMOType: 'pomo'};

    function reducer(state, action) {
      switch (action.type) {
        case 'short':
          return {POMOType: action.type};
        case 'pomo':
          return {POMOType: action.type};
        case 'long':
          return {POMOType: action.type};
        default:
          throw new Error();
      }
    }
    const txt = [{"Pomodoro":"pomo"},{"ShortBreak":"short"},{"LongBreak":"long"}] 
    const [state, dispatch] = useReducer(reducer, initialState);

    function HandleCase(prop){
          switch (prop.kind) {
            case 'short':
              return  <Timer minutes={SHORT_DURATION}/>
            case 'pomo':
              return  <Timer minutes={POMEDORO_DURATION}/>
            case 'long':
              return  <Timer minutes={LONG_DURATION}/>
            default:
              throw new Error();
          }
    }
    return (<div className="main center wrapper backshadow">
        <div className="pomodoro-time">
            <div className="time-list center">
                {txt.map(t => {
                    console.log(t[Object.keys(t)])
                    return <div key={Object.keys(t)}className="time-type">
                        <p className="txt"
                            onClick={() => dispatch({type:t[Object.keys(t)]})}
                        >{Object.keys(t)} </p>
                    </div>
                })}
            </div>
            <div className="timer-section center">
                <HandleCase kind={state.POMOType}/>
            </div>
        </div>
    </div>)
}

export {Timer,Parallax}
