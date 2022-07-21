import React , {useState, useEffect} from 'react';

const Clock = (props) => {
    const [ time , setTime ] = useState (new Date())

    useEffect(() => {
        
        //set
        const id = setInterval( () => { setTime ( new Date()) } , 1000)
       

        //clear 안해주면 id 에
        return (
            () => clearInterval(id)
            
        )   
        
    }, [])
    
    return (
        <div>
            <span>현재시각 : <b>{time.toLocaleDateString()}</b> / <b>{time.toLocaleTimeString()}</b></span>
        </div>
    );
};

export default Clock;