import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { fetchLogin } from '../utils/api'



const Login = ({
    setToken, 
    setUser, 
    username, 
    setUsername}) => {

    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleChangeUser = (event) => {
        setUsername(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const login = await fetchLogin(username, password);
        setUser(login.user);
        setToken(login.token);
        localStorage.setItem('user', JSON.stringify(login.user))
        localStorage.setItem('token', login.token)
        localStorage.setItem('username', username)
        alert(login.message)
        setUsername('')
        setPassword('')
        history.push('/MyRoutines')
        
    }

    return (<>

        <h1 id = "login-head">LOG IN</h1>
            <div id= "login-container">
                <form id= "login-form" onSubmit={handleSubmit}>
                    <label htmlFor="Username">Username</label>
                    <input type="text" name="username" value={username} onChange={handleChangeUser} required/>
                    <label htmlFor="Password">Password</label>
                    <input type="password" name="password" value={password} onChange={handleChangePassword} required/>
                    <button className="login-button" type = "submit">Log in</button>
                </form>
            </div> 

    </>)
}

export default Login;



/// logout 
/// add local storage so that we can stay logged in between 