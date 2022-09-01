import { React, useState } from "react";
import { Link, Route, Switch, NavLink } from "react-router-dom"
import './styles.css'
import Register from "./Register";



const App = () => {

    const [token, setToken] = useState('')
    const [username, setUserName] = useState('')

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

        <Route exact path = '/'>
            <Register token = {token} setToken = {setToken}/> 
        </Route>




    </main>
}

export default App;