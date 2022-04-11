// we restrict unwanted calls through the use of memo. it enhance the work of system.
// memo take a callBack function.
// without memo if count update then item also re-render(unwanted function will automatically call without need).
// give order to memo when count will update, no other function will call or render other than count.

import React, { useState, useMemo } from 'react'

function Hook_3rd_useMemo() {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(0)

   const usingMemo=useMemo( function checking() {
    console.log("check is it rendering?");
},[count])  //  only count is rendering.
    return (
        <>

            <h1>count: {count}</h1>

            <h1>item: {item}</h1>
            
            {usingMemo}

            <button onClick={() => setCount(count + 1)}>update count</button>
            <button onClick={() => setItem(item +1)}>update item</button>


        </>

    )
}

export default Hook_3rd_useMemo;









