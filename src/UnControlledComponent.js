import React,{useRef} from 'react'

function UnControlledComponent() {
    const inputref1=useRef(null)
    const inputref2=useRef(null)

    function submit(e)
    {

        e.preventDefault()
        console.log("input1: ",inputref1.current.value);
        console.log("input2: ",inputref2.current.value);
        let input3=document.getElementById("input3").value
        console.log(input3,input3);
    }
  return (
<form onClick={submit}>
<h1>UnControlled Component</h1>
    <input ref={inputref1} type="text" /> <br /><br />
    <input ref={inputref2} type="text" /> <br /><br />
    <input id="input3" type="text" /> <br /><br />
    <button>Submit Button</button>
</form>


    )
}

export default UnControlledComponent