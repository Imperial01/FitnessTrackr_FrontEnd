import { React, useState } from "react";
import { Link, Route, Switch, NavLink } from "react-router-dom"
import './styles.css'
import Register from "./Register";
import Routines from "./Routines";
import Login from "./Login";
import CreateRoutine from "./CreateRoutine";
import Activities from "./Activities";
import { useHistory } from 'react-router-dom';
import { MyRoutines, FormActivities } from ".";





const App = () => {
    const [routines, setRoutines] = useState([])
    const [search, setSearch] = useState('')
    const [token, setToken] = useState(localStorage.getItem('token') || '')
    const [username, setUsername] = useState(localStorage.getItem('username') || '')
    const [routineId, setRoutineId] = useState('')
    const [activities, setActivities] = useState('')
    const [activitiesId, setActivitiesId] = useState('')
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {})
    const history = useHistory()


    const logout = async (event) => {
        console.log('logout')
        event.preventDefault();
        setUsername('')
        setToken('')
        setUser({})
        localStorage.clear()
        history.push('/home')
        
    }

    return <main>
        <nav id= 'navbar'>
            <div id = "links">
                <NavLink to ="/home" className= "navlink" activeClassName = "active">Home</NavLink> |
                <NavLink to ="/routines" className= "navlink" activeClassName = "active"> Routines</NavLink> |
                <NavLink to ="/MyRoutines" className= "navlink" activeClassName = "active"> My Routines</NavLink> |
                <NavLink to ="/activities" className= "navlink" activeClassName = "active"> Activities</NavLink> |
                {!token ?
                <>
                <NavLink to ="/login" className= "navlink" activeClassName = "active" > Login</NavLink> |
                <NavLink to ="/register" className= "navlink" activeClassName = "active"> Register</NavLink>
                </>:
                <button className="login-button"  onClick={logout}>Log out</button>

                }
            </div>
        </nav>

        
        <Switch>
            <Route exact path = '/'>
                <h1>WELCOME TO FITNESS TRACKER!</h1>
                <Link to= "/register">
                    <button type="text" id="home-profile-btn">View Profile</button>
                </Link>
            </Route>
            <Route path = '/home'>
                <h1>WELCOME {username} TO FITNESS TRACKER!</h1>
                <Link to="/register">
                    <button type="text" id="home-profile-btn">View Profile</button>
                </Link>
            </Route>
            <Route path = '/register'>
                <Register token = {token} setToken = {setToken} 
                username = {username} setUsername = {setUsername}/> 
            </Route>
            <Route path = '/login'>
                <Login setToken = {setToken} username = {username} 
                setUsername = {setUsername} setUser = {setUser}/>
            </Route>        
            <Route path = '/Routines'>
            <Routines setSearch = {setSearch} search = {search} 
            routines = {routines} setRoutines = {setRoutines} token = {token} /> 
            </Route>
            <Route path = '/MyRoutines'>
            <CreateRoutine token = {token} routines = {routines} setRoutines = {setRoutines} setRoutineId = {setRoutineId} />
            <MyRoutines token = {token} routines = {routines} setRoutines = {setRoutines} setRoutineId = {setRoutineId} user = {user}/> 
            </Route>
            <Route path = '/activities'>
            <FormActivities token = {token} activities = {activities} setActivities = {setActivities} setActivitiesId = {setActivitiesId}/>
            <Activities token = {token} activities = {activities} setActivities = {setActivities} setActivitiesId = {setActivitiesId}/> 
            </Route>
        </Switch>

    </main>
}

export default App;