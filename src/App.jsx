import React, { useState, useEffect } from 'react';
import styles from './styles.css';
import Timer from './components/Timer';
import BreathCounter from './components/BreathCounter';
import Circle from './components/Circle';
import BreathingState from './components/BreathingState'
import FinalHold from './components/FinalHold'
import StartButton from './components/StartButton'
import Description from './components/Description'

    
const App = ({ username, password }) => {
    
    // Dynamic Variables
    const goalBreaths = 5;
    const goalHold = 5;
    const breathIn = 2000;
    const breathOut = 2000;
    const fullyOut = 4000;
    
    // React Hooks
    const [countDown, setCountDown] = useState(goalHold);
    const [breathingState, setBreathingState] = useState('')
    const [time, setTime] = useState(0);
    const [timerOn, setTimeOn] = useState(true);
    const [circleOn, setCircleOn] = useState(true)
    const [user, setUser] = useState(0);
    const [phase, setPhase] = useState(0);
    const [round, setRound] = useState(1);
    const [breathNumber, setBreathNumber] = useState(0);
    const [savedTimes, setSavedTimes] = useState([])
    const description = [
        'Press the spacebar to begin breathing!',
        'Breathe fully in and let go. On the last breath, breath fully out',
        'Hold for as long as you can.\n Press the spacebar to inhale and hold.',
        `Hold for ${goalHold} seconds.\nLet go and enjoy the oxygen tingles. \n
        Press Space for next round. \n
        Press Esc to reset.`
    ];

    //quick grabity grab of user previous data
    useEffect(()=> {
        console.log('i am a fetch request to grab user savedTimes')
        //setSavedTimes(data)
    },[])

    // console.log('Final States:', 
    // 'countDown:',countDown, 
    // 'breathingState:', breathingState, 
    // 'time:', time, 
    // 'timerOn:', timerOn, 
    // 'circleOn:', circleOn, 
    // 'phase:', phase, 
    // 'round:', round, 
    // 'breathNumber:', breathNumber, 
    // 'savedTimes:',savedTimes)

    // const [data, setData] = useState(null);
    // useEffect(() => {
    //     fetch("/App")
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setData(data.message)
    //         console.log('data from fetch', data)       
    //     })
    // }, [])
    
    const arr = [];
    for (let i = 0; i < savedTimes.length; i++) {
        arr.push(<div>{savedTimes[i]}</div>)
    }
    return (
        <div id="app">
            <BreathingState 
                breathingState={breathingState}
            />

            {phase !== 0 &&(
                <Circle 
                    circleOn = {circleOn}
                    setCircleOn = {setCircleOn}
                    breathNumber={breathNumber}
                    phase={phase}
                    goalBreaths={goalBreaths}
                    breathIn={breathIn}
                    breathOut={breathOut}
                    fullyOut={fullyOut}
                />
            )}

            {phase === 0 &&(
                <StartButton 
                    setPhase={setPhase}
                />
            )}

            {phase === 2 &&(
                <Timer 
                    time={time} 
                    setTime={setTime}        
                    timerOn={timerOn} 
                    setTimeOn={setTimeOn} 
                    setPhase={setPhase}
                    setCircleOn={setCircleOn}
                    setBreathingState={setBreathingState}
                    phase={phase}
                    savedTimes={savedTimes}
                    setSavedTimes={setSavedTimes}
                    round={round}
                    breathIn={breathIn}
                />        
            )}

            {phase === 1 &&(
                <BreathCounter  
                fullyOut={fullyOut}
                circleOn={circleOn}
                breathNumber={breathNumber}
                setBreathNumber={setBreathNumber}
                setPhase={setPhase}
                setBreathingState={setBreathingState}
                breathingState={breathingState}
                phase={phase}
                goalBreaths={goalBreaths}
                />        
            )}

            {phase === 3 &&(
                <FinalHold 
                circleOn = {circleOn}
                setCircleOn={setCircleOn}
                countDown={countDown}
                goalHold={goalHold}
                setCountDown={setCountDown}
                setBreathingState={setBreathingState}
                setPhase={setPhase}
                setTime={setTime}
                setTimeOn={setTimeOn}
                timerOn={timerOn}
                setBreathNumber={setBreathNumber}
                savedTimes={savedTimes}
                setRound={setRound}
                />        
            )}
            <Description 
                description={description}
                phase={phase}
            />
            <div id='previousTimes'> 
                {arr} 
            </div>
          
            
        </div>
    )
}






export default App;