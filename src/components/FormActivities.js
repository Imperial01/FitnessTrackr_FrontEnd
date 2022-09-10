import React, { useState } from "react";
import { fetchCreateActivity } from "../utils/api";

const FormActivities = ({token, activities, setActivities, setActivitiesId}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')


    const handleSubmit = async (event) => {
        event.preventDefault();
        if(token){
            const createActivityForm = await fetchCreateActivity(token, name, description)
            console.log(createActivityForm)
            setActivities([createActivityForm, ...activities])
        }
    }

    return (<>
        {!token ? <h1>LOG IN TO CREATE ACTIVITY</h1>:
    
            <div id="activities-container">
                <form id="createActivity">
                    <h2>Create an Activity</h2>
                    <label>Name:</label>
                    <input type="text" placeholder="Enter a Name" value={name} onChange={(event)=> setName(event.target.value)}></input>
                    <br />
                    <label>Description:</label>
                    <input type="text" placeholder="Enter a Goal" value={description} onChange={(event)=> setDescription(event.target.value)}></input>
                    <button id="form-submit" type="submit" onClick={handleSubmit}>Submit</button>
                </form>  
            </div>
        }   
        </>
    )
}


export default FormActivities;