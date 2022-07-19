import React, { useState, useEffect } from 'react';
import styles from './styles.css';
import Timer from './components/Timer';
import BreathCounter from './components/BreathCounter';
import Circle from './components/Circle';
import BreathingState from './components/BreathingState'
import FinalHold from './components/FinalHold'
import StartButton from './components/StartButton'
import Description from './components/Description'
import Records from './components/Records'

 
let arr = [];
const App = ({ username, password, userData, setUserData }) => {
    // useEffect(()=>{
    //     fetch('/newUser', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify([username, password])
    //       })
    //       .then(response => response.json())
    //       .then(data => {
    //         console.log('data from starting APP fetch', data)
    //       })   
    //   }, [])
    // Dynamic Variables
    
    useEffect(() => {
        console.log('started APP, here is the data from login:', userData);
        
    }, [])
    const goalBreaths = 25;
    const goalHold = 15;
    const breathIn = 2000;
    const breathOut = 1500;
    const fullyOut = 4000;
    const testPhase = 0;
    
    // React Hooks
    const [countDown, setCountDown] = useState(goalHold);
    const [breathingState, setBreathingState] = useState('')
    const [time, setTime] = useState(0);
    const [timerOn, setTimeOn] = useState(true);
    const [circleOn, setCircleOn] = useState(true)
    const [user, setUser] = useState(0);
    const [phase, setPhase] = useState(testPhase);
    const [round, setRound] = useState(1);
    const [breathNumber, setBreathNumber] = useState(0);
    const [savedTimes, setSavedTimes] = useState([])
    const [records, setRecords] = useState([]);
    const [showRecords, setShowRecords] = useState(false);
    
    const description = [
        'Press the spacebar to begin breathing!',
        'Breathe fully in and let go. On the last breath, breath fully out',
        'Hold for as long as you can.\n Press the spacebar to inhale and hold.',
        `Hold for ${goalHold} seconds.\nLet go and enjoy the oxygen tingles. \n Press Space for next round. Press Enter to record retentions and log out.
        `
    ];
    
    /*

        data obj = [ 
            {
                date:
                [
                    {round:time}, 
                    {round:time}, 
                    {round:time}
                ]
            }
    ]

    */

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
    
    useEffect(()=> {
        arr = [];
        for (let i = 0; i < savedTimes.length; i++) {
            
            let ms = savedTimes[i][i + 1];
            console.log('useEffect for Loop - savedTimes at', i, 'is:', savedTimes[i])
    
            let minutes = ("0" + Math.floor((ms / 60000) % 60)).slice(-2).toString();
            let seconds = ("0" + Math.floor((ms / 1000) % 60)).slice(-2).toString();
            let milliseconds = ("0" + ((ms / 10) % 100)).slice(-2).toString();
            let timeFormat = `Round ${i + 1} - ${minutes}:${seconds}:${milliseconds}`
            arr.push(<div key={i}>{timeFormat}</div>);
            console.log('the array now looks like:', arr)
        }
    }, [savedTimes])
    return (
        <div id="app">
            {phase !== 0 &&(
            <BreathingState 
                breathingState={breathingState}
            />
            )}
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
                    setSavedTimes={setSavedTimes}
                    setPhase={setPhase}
                    name={userData[0].first_name}
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
                time={time}
                timerOn={timerOn}
                setBreathNumber={setBreathNumber}
                savedTimes={savedTimes}
                setSavedTimes={setSavedTimes}
                round={round}
                setRound={setRound}
                userData={userData}
                setUserData={setUserData}
                setRecords={setRecords}
                />        
            )}
            <Description 
                description={description}
                phase={phase}
            />


            <div id='previousTimes'> 
                {arr} 
            </div>
            <Records 
                userData={userData}
                showRecords={showRecords}
                setShowRecords={setShowRecords}
                records={records}
                setRecords={setRecords}
            />
            
        </div>
    )
}






export default App;