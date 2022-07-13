import React, { useState } from 'react';
import styles from './styles.css';
import Timer from './components/Timer';
import BreathCounter from './components/BreathCounter';
import Circle from './components/Circle';
import BreathingState from './components/BreathingState'
import FinalHold from './components/FinalHold'

const App = () => {
    /* 
    STATEs
    time = 0
    timerOn = false;
    BreathingState = ['In', 'out', 'hold'];
    circle div - small - extension - change transition on breathCount change
    BreathCount = 0/30; timer to change very 3 seconds
    description: ['pragraphs'] - based on
    */
    // const navigate = useNavigate()
    const [countDown, setCountDown] = useState(3);
    const [breathingState, setBreathingState] = useState('')
    const [time, setTime] = useState(0);
    const [timerOn, setTimeOn] = useState(true);
    const [circleOn, setCircleOn] = useState(true)
    const [user, setUser] = useState(0);
    const [phase, setPhase] = useState(1);
    const [round, setRound] = useState(1);
    const [breathNumber, setBreathNumber] = useState(0);
    // cosnt [breathCount, setBreathCount] = useState(0);
    // cosnt [description, setDescription] = useState({
    //     one: 'breathe fully in and let go',
    //     two: 'breathe out all the way and hold for as long as you can',
    //     three: 'takea deep breath and hold for 10 seconds'
    // });
    let pressed = 0;
 

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
                />        
            )}

            {phase === 3 &&(
                <FinalHold 
                circleOn = {circleOn}
                setCircleOn={setCircleOn}
                countDown={countDown}
                setCountDown={setCountDown}
                setBreathingState={setBreathingState}
                phase={phase}
                />        
            )}

          
            
        </div>
    )
}






export default App;