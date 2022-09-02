import React, { useState } from 'react'
import { fetchLogin } from '../utils/api'



const Login = ({
    setToken, 
    setUser, 
    username, 
    setUsername}) => {

    const [password, setPassword] = useState('');

    const handleChangeUser = (event) => {
        setUsername(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const login = await fetchLogin(username, password);
        console.log(login.token);
        setUser(login.user);
        setToken(login.token);
    }

    return (<>

        <h1 id = "login-head">LOG IN</h1>
            <div id= "login-container">
                <form id= "login-form" onSubmit={handleSubmit}>
                    <label htmlFor="Username">Username</label>
                    <input type="text" name="username" value={username} onChange={handleChangeUser} required/>
                    <label htmlFor="Password">Password</label>
                    <input type="password" name="password" value={password} onChange={handleChangePassword} required/>
                    <button className="login-button" type = "submit">Login In</button>
                </form>
            </div> 
        
 

    </>)
}

export default Login;