import {React, useEffect} from "react";
import { fetchAllRoutines, fetchDeleteRoutine, fetchUpdateRoutines } from "../utils/api";


const MyRoutines = (props) => {
  
    const { routines, setRoutines, user, token } = props

    const myRoutinePost = async () => {
        setRoutines(await fetchAllRoutines())
    }

    const handleDelete = async (id) => {
        const deleteRoutine = await fetchDeleteRoutine(token, id)
        setRoutines(routines.filter(routine => { 
            return routine.id !== deleteRoutine.id
        }))
    }

    const updateMyRoutine = async (token, name, goal) => {
        const updateRoutine = await fetchUpdateRoutines(token, name, goal)
        
    }


    useEffect(() => {
        myRoutinePost();
    }, []);

    return (

        <div>
            <h1 id="routines-header">My Routines</h1>
        {       
                    routines.filter(routine => {
                    return routine.creatorId === user.id
                    }).map((routine => {
                    return (
                        <>
                            <div id="routine-card" key = {routine.id}>
                                <h1>{routine.name}</h1>
                                <p>{routine.goal}</p>
                                <p>By: {routine.creatorName}</p>
                                <button id="form-submit" onClick={()=> handleDelete(routine.id)}>Delete</button>

                                
                            </div>

                        </>
                    );
                }))}
        </div>
    );
};

export default MyRoutines;