import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchCreateRoutine } from "../utils/api";


const CreateRoutine = ({token, routines, setRoutines, setRoutineId}) => {

    const [name, setName] = useState('')
    const [goal, setGoal] = useState('')
    const [isPublic, setIsPublic] = useState(false)
    const history = useHistory();


    const handleSubmit = async (event) => {
        event.preventDefault();
        if(token){
            const createRoutineForm = await fetchCreateRoutine(token, name, goal, isPublic)
            console.log(createRoutineForm)
            setRoutines([createRoutineForm, ...routines])
            setRoutineId(createRoutineForm.creatorId)
            history.push('/routines')
        }
    }



    return (<>
        {!token ? <h1>LOG IN TO CREATE ROUTINE</h1>:
    
            <div id="createRoutine-containter">
                <form id="createRoutine">
                    <h2>Create a Routine</h2>
                    <label>Name:</label>
                    <input type="text" placeholder="Enter a Name" value={name} onChange={(event)=> setName(event.target.value)}></input>
                    <br />
                    <label>Goal:</label>
                    <input type="text" placeholder="Enter a Goal" value={goal} onChange={(event)=> setGoal(event.target.value)}></input>
                    <input type= "checkbox" value={isPublic} onChange={()=> setIsPublic(true)}></input>
                    <button id="form-submit" type="submit" onClick={handleSubmit}>Submit</button>
                </form>  
            </div>
        }   
        </>
    )
}



export default CreateRoutine;