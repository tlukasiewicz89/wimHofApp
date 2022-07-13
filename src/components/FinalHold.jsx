import React, { useCallback, useEffect, useState } from 'react';

const FinalHold = ({ setCircleOn, circleOn, countDown, setCountDown, setBreathingState, phase, setPhase, goalHold, setTime, timerOn, setBreathNumber, setTimeOn, savedTimes, setRound }) => {
    
    useEffect(() => {
        console.log('started countdown in finalhold')
        console.log(countDown, phase)
        let interval = null;
        
        if (countDown) {
            interval = setInterval(() => {
                setCountDown(prevTime => prevTime - 1)
            }, 1000)
        } else {
            setBreathingState('Breath Out')
            setCircleOn(true);
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        }
        

    }, [countDown])

    useEffect(()=> {
        console.log('savedTimes in useEffect hook in final hold', savedTimes)
    },[])
    const pressSpace = useCallback(event => {
        if (event.code === 'Space') {
            console.log('Space pressed from final hold');
            //reset back to original when clicked feature
        // brgin States: countDown: 10 breathingState: Breath Out time: 0 timerOn: true circleOn: false phase: 1 round: 1 breathNumber: 0 savedTimes: []    
        //Final States: countDown: 0 breathingState: Breath Out time: 3260 timerOn: false circleOn: true phase: 3 round: 1 breathNumber: 2 savedTimes: 1
        console.log('savedTimes in final hold on space ', savedTimes)
            setCountDown(goalHold);
            setTime(0);
            setTimeOn(true);
            setBreathNumber(0);
            setPhase(1);
            setCircleOn(false);
            setRound(prev=>prev+1);
          }
    })

    useEffect(()=>{
        document.addEventListener('keyup', pressSpace);
        return () => document.removeEventListener('keyup', pressSpace);
    }, [pressSpace])

    const reset = () => {
        

    }
    if (countDown) {
        return (
            <div id='finalHold'>
                    <div>Hold for {countDown}</div>
            </div>
        )
    } else {
        return (
            <div id='finalHold'>
                    <div onClick={()=>{
                        reset();
                    }}>Next Round</div>
            </div>
        )
    }
}
    

export default FinalHold;