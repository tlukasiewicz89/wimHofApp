import React, { useEffect } from 'react';

const Description = ({ phase, description }) => {

    useEffect(()=>{

    },[phase])

    return (
        <div id='description'>
            <div>{description[phase]}</div>
        </div>
    )
}

export default Description;