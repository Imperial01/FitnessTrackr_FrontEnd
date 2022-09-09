import {React, useEffect} from "react";
import { fetchAllRoutines } from "../utils/api";

const MyRoutines = (props) => {
    const {
        routines, setRoutines,
        routineID, setRoutineID, token,
        featuredPost, setFeaturedRoutine, search, setSearch, user } = props

        console.log(user)
    const myRoutinePost = async () => {
        setRoutines(await fetchAllRoutines())
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
                            </div>
                        </>
                    );
                }))}
        </div>
    );
};

export default MyRoutines;