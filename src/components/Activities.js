import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchActivities } from "../utils/api";

const Activities = () => {
    const [activities, setActivities,
        activitiesId, setActivitiesId, token] = useState([])

    const history = useHistory();

    const activity = async () => {
        setActivities(await fetchActivities())
    }

    useEffect(() => {
        activity()
    }, []);

    const handleActivities = (event, activities) => {
        if(token) {
            setActivities(activities)
            setActivitiesId(activities._id)
            history.push(`/activities/${activities._id}`)
        } else {
            alert("Log in")
        }
    }

    return (
        <div>
            {activities.filter(activity => {
                return `${activity.name} ${activity.description}`
                .toLowerCase()
                .includes(search.toLowerCase())
            }).map((activity) => {
                return (
                    <>
                    <div id="activity-form" onClick={(event) => {
                        {handleActivities(event, activities)}
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
            })}
        </div>
    )
}

export default Activities;