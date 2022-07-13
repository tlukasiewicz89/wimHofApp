import React, { useEffect } from 'react';

const Circle = ({ circleOn, setCircleOn, breathNumber, phase}) => {
    const style = {
        tiny: {
            background: 'blue',
            // boxShadow: '5px 5px 5px #04bd57',
            transition: '3, transform 3s',
            transform: 'scale(.2)',
            transitionTimingFunction: 'ease-out'
        },
        small: {
            background: 'blue',
            // boxShadow: '5px 5px 5px #04bd57',
            transition: '1.5s, transform 1.5s',
            transform: 'scale(1)',
            transitionTimingFunction: 'ease-in'
        },
        big : {
            background: 'green',
            // boxShadow: '5px 5px 5px #3085d6',
            transition: '2s, transform 2s',
            transform: 'scale(.5)',
            transitionTimingFunction: 'ease-out'
        }
    }
    const finalCount = () => {

    }

    useEffect(() => {
        if (phase === 1) {
            let interval = null;
            console.log('circleOn', circleOn)
            let time = (circleOn) ? 2000 : 1500;
            if (breathNumber <= 2) {
                interval = setInterval(()=>{
                    setCircleOn(!circleOn);
                }, time)
            } else if (breathNumber === 3) {
                setCircleOn('tiny');
            }else {
                clearInterval(interval);
    
            }
            return () => {
                clearInterval(interval);
            }
        }
       
    }, [circleOn])

    return (
        <div id='circleContainer'>
            <div 
                id='circle'
                style={circleOn === 'tiny' ? style.tiny: circleOn ? style.big : style.small}
                >
            </div>
        </div>
    )
}

export default Circle;



// const tiny = {
//     background: 'blue',
//     // boxShadow: '5px 5px 5px #04bd57',
//     transition: '3, transform 3s',
//     transform: 'scale(.2)',
//     transitionTimingFunction: 'ease-out'
//   };

// const small = {
//     background: 'blue',
//     // boxShadow: '5px 5px 5px #04bd57',
//     transition: '1.5s, transform 1.5s',
//     transform: 'scale(1)',
//     transitionTimingFunction: 'ease-in'
// };
  
// const big = {
//     background: 'green',
//     // boxShadow: '5px 5px 5px #3085d6',
//     transition: '2s, transform 2s',
//     transform: 'scale(.5)',
//     transitionTimingFunction: 'ease-out'
// };