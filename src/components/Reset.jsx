import React, { useEffect, useState } from 'react';

const Reset = ({ setCircleOn, circleOn, countDown, setCountDown, setBreathingState }) => {
    
  
    return (
        <div id='reset'>
            <div>Hold for {countDown} Seconds</div>
        </div>
    )
}

export default Reset;