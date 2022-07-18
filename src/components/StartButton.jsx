import React, { useCallback, useEffect } from 'react';

const StartButton = ({ setPhase, name, setSavedTimes }) => {

    const pressSpace = useCallback(event => {
        if (event.code === 'Space') {
            console.log('Space pressed from Start Button');
            setPhase(1);
          }
    })

    useEffect(() => {
        setSavedTimes([]);
    }, [])

    useEffect(()=>{
        document.addEventListener('keyup', pressSpace);
        return () => document.removeEventListener('keyup', pressSpace);
    }, [pressSpace])

    return (
        <div id='startButton'>
            Welcome, {name}
        </div>
    )
}

export default StartButton;