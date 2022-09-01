import React, { useState } from "react";
import { fetchRegister } from "../utils/api";




const Register = ({token, setToken}) => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState(''); 

    const handleChangeUser = (event) => {
        setUserName(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }


    const handleSubmit = async (event) => {
        event.preventDefault(); 
        const registeredToken = await fetchRegister(username, password)
        setToken(registeredToken)
        console.log(token)
        setUserName('')
        setPassword('')
    }



    return (
        <>
            {token ? 
            <>
                <h1>You're Signed Up! Get Tracking!</h1>
            </> :
         <>
            <h1 id = "register">Sign Up</h1>
                <div id= "signup-container">
                    <form id= "register-form" onSubmit={handleSubmit}>
                        <label htmlFor="Username">Username</label>
                        <input type="text" name="username" value={username} onChange={handleChangeUser} required/>
                        <label htmlFor="Password">Password{`(*)`}</label>
                        <input type="password" name="password" value={password} onChange={handleChangePassword} required/>
                        <button className="register-button" type = "submit">Sign Up</button>
                    </form>
                    <small>* must be {`>`} 8 characters</small>
                </div> 
         </> 
        
        }
            
        </>

    )
}


export default Register;