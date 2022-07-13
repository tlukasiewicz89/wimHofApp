import React, { useState, useEffect } from 'react';

const BreathCounter = ({breathNumber, setBreathNumber, phase, setPhase, circleOn, setBreathingState}) => {
    // function play() {
    //     console.log('started play file')
    //     var audio = new Audio(huya);
      
    // }
    // let audio = new Audio(huya);
      
    useEffect(() => {
        console.log(breathNumber)

        if (breathNumber < 3 && !circleOn) {
            console.log('breath in')
            setBreathingState('Breath In')    
        }else {
            if (breathNumber === 3) {
                setBreathingState('Fully Out ') 
            } else {
                setBreathingState('Breath Out') 
                //delete later
                // circleOn === 'tiny' ? style.tiny: circleOn ? style.big : style.small
                if(!circleOn){
                    console.log('started playing', audio.play())
                }
                
            }
            console.log('breath out')
            
        if (breathNumber === 3 && phase === 1) {
            setTimeout(()=>{
                setBreathingState('Hold')
                setPhase(2);
            }, 2000);
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
            <div>/ 30</div>
        </div>
    )

}

export default BreathCounter;