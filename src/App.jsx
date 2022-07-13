import React, { useState } from 'react';
import styles from './styles.css';
import Timer from './components/Timer';
import BreathCounter from './components/BreathCounter';
import Circle from './components/Circle';
import BreathingState from './components/BreathingState'
import FinalHold from './components/FinalHold'

const App = () => {

    // Static Variables
    const goalBreaths = 2;
    const goalHold = 2;
    
    // React Hooks
    const [countDown, setCountDown] = useState(goalHold);
    const [breathingState, setBreathingState] = useState('')
    const [time, setTime] = useState(0);
    const [timerOn, setTimeOn] = useState(true);
    const [circleOn, setCircleOn] = useState(true)
    const [user, setUser] = useState(0);
    const [phase, setPhase] = useState(1);
    const [round, setRound] = useState(1);
    const [breathNumber, setBreathNumber] = useState(0);
    const [savedTimes, setSavedTimes] = useState([])
    // cosnt [breathCount, setBreathCount] = useState(0);
    // cosnt [description, setDescription] = useState({
    //     one: 'breathe fully in and let go',
    //     two: 'breathe out all the way and hold for as long as you can',
    //     three: 'takea deep breath and hold for 10 seconds'
    // });
    let pressed = 0;
 
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

    return (
        <div id="app">
            <BreathingState 
                breathingState={breathingState}
            />

            <Circle 
                circleOn = {circleOn}
                setCircleOn = {setCircleOn}
                breathNumber={breathNumber}
                phase={phase}
                goalBreaths={goalBreaths}
            />

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
                />        
            )}

            {phase === 1 &&(
                <BreathCounter  
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

            <div> {savedTimes} </div>
          
            
        </div>
    )
}






export default App;