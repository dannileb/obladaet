import React, { useState } from "react";
function Test() {
    const [status, setStatus] = useState(0);
    const [text, setText] = useState('')
    const [result, setResult] = useState('')

    return(
        <>
            <>
                <div>
                    <span> {status} </span>
                </div>
                <button onClick={()=>status <=9 ? setStatus(status+1) : setStatus(10)  }>
                    +
                </button>
                <button onClick={()=>status >=1 ? setStatus(status-1) : setStatus(0)  }>
                    -
                </button>
            </>
            <input type="text" placeholder='Write in camelSame...'
                   value={text}
                   onChange={(event)=>setText(event.target.value)}
                   onBlur={()=>setResult(text.replace(/([a-zа-яё])([A-ZА-ЯЁ])/g, "$1 $2"))}
            />
            Result is: {result}
        </>
    )
}


export default Test