import React from 'react'
import './style.css'
import style from './custom.module.css'
function Style() {
  return (
   
<>
<h1 className='external' >using external css</h1>
    <h1 style={{color:"hotpink",backgroundColor:"yellow"}}>inline css</h1>
    <h1 className={style.module}>module css</h1>

</>
    
  )
}

export default Style;