import React,{useState} from 'react';

function Basic_Form_Validation() {
    const [user,setUser]=useState("");
    const [passward,setPassward]=useState("");
    const [userError,setUserError]=useState("false");
    const [passError,setPassError]=useState("false");



    function logIn(e){
        // alert("logIn")
        if (user.length<3 || passward.length<3){
            alert('type correct value')
        }
        else{
            alert("all good")
        }
        e.preventDefault()
    }
    

    function userHandler(e){
        let item=e.target.value.length;
        if(item.length<3){
            setUserError(true)
        }
    
    
    else{
        setUserError(false)
        
    }
    setUser(item)
}

    function passHandler(e){
        let item=e.target.value.length;
        if(item.length<3){
            setPassError(true)
        }
    
    
    else{
        setPassError(false)
        
    }
    setPassward(item)
    }
    // console.log(e.   target.value);}
    return (
        <>
     <form onSubmit={logIn}>
     <h1>
    Login
</h1>
<input type="text" placeholder='Enter your useName' onChange={userHandler} />{userError?<span>User not Valid</span>:""}
<br />
<br />
<input type="text" placeholder='Enter your Passward' onChange={passHandler}/>{passError?<span>User not Valid</span>:""}
<br />
<br />

<button type='submit'>Submit</button>

     </form>       

        </>
    )
}

export default Basic_Form_Validation