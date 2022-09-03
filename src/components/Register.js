import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchRegister } from "../utils/api";




const Register = ({token, setToken, username, setUsername}) => {

    const [password, setPassword] = useState(''); 
    const history = useHistory();

    const handleChangeUser = (event) => {
        setUsername(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }


    const handleSubmit = async (event) => {
        event.preventDefault(); 
        const registeredToken = await fetchRegister(username, password)
        setToken(registeredToken)
        console.log(registeredToken)
        setUsername('')
        setPassword('')
        history.push('/login')
    }



    return (
        <>
            {token ? 
            <>
                <h1>You're Signed Up! Get Tracking!</h1>
            </> :
         <>
            <h1 id = "register-head">Sign Up</h1>
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