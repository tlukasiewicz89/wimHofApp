import React, { useEffect, useState } from 'react';

let arr = [];
const Records = ({ userData, setShowRecords, showRecords, records, setRecords }) => {
    
    useEffect(() => {
        
        console.log('RECORDS COMPONENT USE EFFECT START', userData[0].records)
        let records = JSON.parse(userData[0].records);
        console.log('now the results after JSON parse', records)

        for (let i = records.length - 1; i >= 0; i--) {
            let sesh = records[i];
            console.log('sesh', sesh)
            let seshDivs = [];
            for (let key in sesh) {
                seshDivs.push(<div className='dateDiv'>{key}</div>);
                console.log('key', key)
                console.log('sesh[key]', sesh[key])
                // iterate over the rounds array
                sesh[key].forEach((obj, index )=> {
                    // ms = milliseconds
                    let ms = obj[index+1]
                    console.log('obj', obj);
                    console.log('time is obj[index+1]', obj[index+1]);

                    let minutes = ("0" + Math.floor((ms / 60000) % 60)).slice(-2).toString();
                    let seconds = ("0" + Math.floor((ms / 1000) % 60)).slice(-2).toString();
                    let milliseconds = ("0" + ((ms / 10) % 100)).slice(-2).toString();
                    let timeFormat = `Round ${index + 1} - ${minutes}:${seconds}:${milliseconds}`

                    seshDivs.push(<div className='roundDiv'>{timeFormat}</div>)

                })
            }
            arr.push(<div className='seshDiv'>{seshDivs}</div>);
        }
        setRecords(arr);
    }, [userData])


    console.log('arr', arr)
    if (showRecords) {
        return (
        <div id='records'>
            <h3 onClick={()=>{setShowRecords(!showRecords)}}>Hide Records</h3>
            {/* {arr} */}
            {records}
        </div>
        )
    } else {
        return (
        <div id='records'>
            <h3 onClick={()=>{setShowRecords(!showRecords)}}>Show Records</h3>
        </div>
        )
    }

}

export default Records;