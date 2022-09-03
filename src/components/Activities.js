import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchActivities } from "../utils/api";

const Activities = ({token, search, setSearch}) => {
    const [activities, setActivities] = useState([])
    const [activitiesId, setActivitiesId ] = useState('')

    const history = useHistory();

    const activity = async () => {
        setActivities(await fetchActivities())
    }

    useEffect(() => {
        activity()
    }, []);

    const handleActivities = (event, activity) => {
        if(token) {
            setActivities(activities)
            setActivitiesId(activities._id)
            history.push(`/activities/${activities._id}`)
        } else {
            alert("Log in")
        }
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" placeholder="Search Activity" value={search} onChange={handleSearch}></input>
                {/* <button style={{ fontSize: "15px" }} onClick={handleClick}>Create a Routine +</button> */}
            </form>
            { activities ?
            
            activities.filter(activity => {
                return `${activity.name} ${activity.description}`
                .toLowerCase()
                .includes(search.toLowerCase())
            }).map((activity) => {
                return (
                    <>
                    <div id="activity-form" onClick={(event) => {
                        {handleActivities(event, activity)}
                    }}>
                    </div>
                        <div>
                            <b>By: </b> {activity.creatorName}
                        </div>
                        <div>
                            <b></b> {activity.name}
                            <b></b> {activity.description}
                        </div>
                    </>
                )
            }): null 
        }
        </div>
    )
}

export default Activities;