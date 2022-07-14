import React, { useState, useEffect } from 'react';

const BreathCounter = ({breathNumber, setBreathNumber, phase, setPhase, circleOn, setBreathingState, goalBreaths, fullyOut}) => {
    // function play() {
    //     console.log('started play file')
    //     var audio = new Audio(huya);
      
    // }
    // let audio = new Audio(huya);
      
    useEffect(() => {
        console.log('breathNumber from useEffects:', breathNumber)

        if (breathNumber < goalBreaths && !circleOn) {
            console.log('breath in')
            setBreathingState('Breath In')    
        }else {
            if (breathNumber === goalBreaths) {
                setBreathingState('Fully Out ') 
                console.log('Fully')
            } else {
                setBreathingState('Breath Out') 
                console.log('breath out')
                //delete later
                // circleOn === 'tiny' ? style.tiny: circleOn ? style.big : style.small
                // if(!circleOn){
                //     console.log('started playing', audio.play())
                // }
                
            }
            
            
        if (breathNumber === goalBreaths && phase === 1) {
            setTimeout(()=>{
                setBreathingState('Hold')
                setPhase(2);
            }, fullyOut);
        }    
        }
        if (!circleOn) {
            setBreathNumber(prev => prev+1)
        }
        
    }, [circleOn])

    return (
        <div id='breathCounter'>
            <div>Breaths: </div>
            <div>{breathNumber}</div>
            <div>/ {goalBreaths}</div>
        </div>
    )

}

export default BreathCounter;