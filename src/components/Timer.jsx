import React, { useCallback, useState, useEffect } from 'react';

const Timer = ({ time, setTime, timerOn, setTimeOn, setPhase, setCircleOn, setBreathingState, phase, setSavedTimes, savedTimes, round, breathIn }) => {

    // const [time, setTime] = useState(0);
    // const [timerOn, setTimeOn] = useState(false);
    useEffect(() => {
        console.log('test use effect')
        let interval = null;
        if (timerOn) {
            interval = setInterval(() => {
            setTime(prevTime => prevTime + 20)
            }, 20)
        } else {
            
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        }
        // empty array only runs on initial render and never again
        // no conditional can creat infinte loop
    }, [timerOn])

    const pressSpace = useCallback(event => {
        if (event.code === 'Space') {
            console.log('Space pressed');
            console.log('saved time as:', time)
            // console.log('saveTimes state:', savedTimes)
            if (phase === 2) { 
                console.log('phase', phase)
                setTimeOn(false);

                // append to the savedTime state
                let newObj = {}
                newObj[round] = time;
                setSavedTimes(oldArr => [...oldArr, newObj]);

                //reset the circle
                setCircleOn(false);
                setBreathingState('Fully In');
                
                // console.log('savedTimes', savedTimes)  
                setTimeout(() => {

                    setPhase(3)
                    setBreathingState('Hold')
                  
                }, breathIn)
              }
          }
    })

    useEffect(()=>{
        document.addEventListener('keyup', pressSpace);
        return () => document.removeEventListener('keyup', pressSpace);
    }, [pressSpace])
    
    

    return (
        <div id="timer">
            <div>
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>
           
        </div>
    )

}

export default Timer;

 /* <div>
    {!timerOn && time === 0 &&(
        <button onClick={()=> setTimeOn(true)}>Start</button>
    )}
    {timerOn && (
        <button onClick={()=> setTimeOn(false)}>Stop</button>
    )}
    {!timerOn && time !== 0 &&(
        <button onClick={()=> setTimeOn(true)}>Resume</button>
    )}
    {!timerOn && (
        <button onClick={()=> setTime(0)}>Reset</button>
    )}
</div> */