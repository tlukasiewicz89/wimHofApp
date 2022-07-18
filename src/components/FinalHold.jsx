import React, { useCallback, useEffect, useState } from 'react';

const FinalHold = ({ setCircleOn, circleOn, countDown, setCountDown, setBreathingState, phase, setPhase, goalHold, setTime, timerOn, setBreathNumber, setTimeOn, savedTimes, setRound, setSavedTimes, userData, setUserData, round, time, setRecords }) => {
    
    useEffect(() => {
        console.log('started countdown in finalhold')
        // console.log(countDown, phase)
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
        if (event.code === 'Enter') {
            console.log('Enter pressed from final hold');
            console.log('savedTimes', savedTimes)
            console.log('time', time)
            console.log('userData:', userData)
            console.log('userData[0].records:', typeof JSON.parse(userData[0].records))
            let prevRecords = JSON.parse(userData[0].records);
            console.log('prevRecords:', prevRecords);

            const timestamp = Date.now()
            const humanReadableDateTime = new Date(timestamp).toLocaleString();

            const obj = {};
            obj[humanReadableDateTime] = savedTimes;
            console.log('this is the new obj:', obj)

            prevRecords.push(obj);
            console.log('newData after push:', prevRecords)
            fetch('/updateRecord', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify([userData[0].username, prevRecords])
              })
              .then(response => response.json())
              .then(data => {
                console.log('data from fetch', data )
              })
          
            //reset all states to logged out
            setCountDown(goalHold);
            setTime(0);
            setTimeOn(true);
            setBreathNumber(0);
            setPhase(1);
            setCircleOn(false);
            setRound(0);
            setSavedTimes([]);
            setRecords([])
            // setUserData('');
        }
    })

    useEffect(()=>{
        document.addEventListener('keyup', pressSpace);
        return () => document.removeEventListener('keyup', pressSpace);
    }, [pressSpace])

    
    if (countDown) {
        return (
            <div id='finalHold'>
                    <div>Hold for {countDown}</div>
            </div>
        )
    } else {
        return (
            <div id='finalHold'>
                    <div>Next Round</div>
            </div>
        )
    }
}
    

export default FinalHold;