import React, { useState, useEffect ,useRef} from 'react';

function Timer_useref() {
    const [timer, settimer] = useState(0);
    const intervalRef=useRef()
    useEffect(() => {
         intervalRef.current = setInterval(() => {  // created an instance for setInterval
            settimer(prev => prev + 1)  // first input is arrow function with what to do after interval
        }, 1000); // second is time in ms

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div>
            timer = {timer}
            <div>
                <button onClick={()=>clearInterval(intervalRef.current)}>Stop</button>
            </div>
        </div>
    );
}

export default Timer_useref;
