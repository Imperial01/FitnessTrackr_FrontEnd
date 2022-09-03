import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchCreateActivity } from "../utils/api";

const FormActivities = () => {
    const [activities, setActivities] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory()

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(token) {
            const createActivity = await fetchCreateActivity(token, name, description)
            ([createActivity])
            history.push('/activities')
        } else {
            alert("Please Login")
        }
    }

    useEffect(() => {
        fetchCreateActivity()
    }, [])


    return (
        <>
            <div id="create-container">
                <form onSubmit={handleSubmit}>
                    <h2>Create an Activity</h2>
                    <label>Name: </label>
                        <input
                            type="text"
                            placeholder="enter activity name"
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        ></input>
                    <label>Description: </label>
                        <input
                            type="text"
                            value={description}
                            placeholder="enter activity description"
                            onChange={(event) => {
                                setDescription(event.target.value);
                            }}
                        ></input>
                    <button type="submit">Add activity</button>
                </form>
            </div>
            {token ? (
                <>
                    <CreateActivityForm
                        activities={activities}
                        setActivities={setActivities}
                    />
                </>
            ) : null}   
        </>
    )
}


export default FormActivities;