import React,{useState} from 'react'

function TernaryOperator() {
const [condition,setCondition]=useState(8)


  return (
      <>
              {condition===8?<h1>condition is 8</h1>:condition===2?<h1>condition is 2</h1>:<h1>dont' know the condition</h1>}
          {/* also know as ternary operator */}
      </>
  )
}

export default TernaryOperator