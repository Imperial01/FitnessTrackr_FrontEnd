import { React, useState } from "react";
import { Link, Route, Switch, NavLink } from "react-router-dom"
import './styles.css'
import  Users  from './Users'



const App = () => {

    const [token, setToken] = useState('')

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

        <Route>
            <Users /> 
        </Route>




    </main>
}

export default App;