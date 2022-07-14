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