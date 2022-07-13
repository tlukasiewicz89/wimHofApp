import React, { useEffect, useState } from 'react';

const FinalHold = ({ setCircleOn, circleOn, countDown, setCountDown, setBreathingState, phase }) => {
    
    useEffect(() => {
        if (phase === 3) {
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
        }
        

    }, [countDown])

    const reset = () => {
        //reset back to original
    }

    console.log('started finalHold',circleOn)
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