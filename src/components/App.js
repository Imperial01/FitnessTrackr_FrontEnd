import { React, useState } from "react";
import { Link, Route, Switch, NavLink } from "react-router-dom"
import './styles.css'
import Register from "./Register";
import Login from "./Login";



const App = () => {

    const [token, setToken] = useState('')
    const [username, setUsername] = useState('')
    const [user, setUser] = useState({})

    return <main>
        <nav id= 'navbar'>
            <div id = "links">
                <NavLink to ="/home" className= "navlink" activeClassName = "active">Home</NavLink> |
                <NavLink to ="/routines" className= "navlink" activeClassName = "active"> Routines</NavLink> |
                <NavLink to ="/MyRoutines" className= "navlink" activeClassName = "active"> My Routines</NavLink> |
                <NavLink to ="/activities" className= "navlink" activeClassName = "active"> Activities</NavLink> |
                <NavLink to ="/login" className= "navlink" activeClassName = "active"> Login</NavLink>
            </div>
        </nav>

        <Switch>
            <Route exact path = '/'>
                <Register token = {token} setToken = {setToken} 
                username = {username} setUsername = {setUsername}/> 
            </Route>

            <Route path = '/login'>
                <Login setToken = {setToken} username = {username} 
                setUsername = {setUsername} setUser = {setUser}/>
            </Route>
        </Switch>


    </main>
}

export default App;