import React from 'react'

function PassComponent_as_Props(props) {
  return (
      <>
              <h1>PassComponent_as_Props</h1>

            <button onClick={()=>props.data()}>Alert Button</button>

      </>
  )
}

export default PassComponent_as_Props