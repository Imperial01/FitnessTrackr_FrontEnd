// Routines

// As any user on the Routines tab, I want to:

// see a list of all public routines showing:
// The routine name, goal, and creator's username
// A list of activities for the routine, including their name, description, and duration and/or count
// As a registered user on the My Routines tab, I want to:

// be shown a form to create a new routine

// the form should have text fields for name and goal
// for each routine which is owned by me I should

// be able to update the name and goal for the routine
// be able to delete the entire routine
// be able to add an activity to a routine via a small form which has a dropdown for all activities, an inputs for count and duration
// be able to update the duration or count of any activity on the routine
// be able to remove any activity from the routine


import { React, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { fetchAllRoutines } from "../utils/api";

const Routines = (props) => {
    const history = useHistory();
    const {
        routines, setRoutines,
        routineID, setRoutineID, token,
        featuredPost, setFeaturedRoutine, search, setSearch } = props


    const routinePost = async () => {
        setRoutines(await fetchAllRoutines())
    }




    useEffect(() => {
        routinePost();
    }, []);


    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    // const handleClick = () => {
    //     token ? history.push('/createform') :
    //         alert("Please Login")
    // }

    // const handleFeaturedRoutine = (event, routine) => {
    //     // grab that routine and display on screen
    //     if (token) {
    //         setFeaturedRoutine(routine);
    //         setRoutineID(routine._id)
    //         history.push(`/routines/${routine._id}`)
    //     } else {
    //         alert("please Login")
    //     }

    //     // change the URL path to ${APIURL}/routine/routineID
    // }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" placeholder="Search Routine" value={search} onChange={handleSearch}></input>
                {/* <button style={{ fontSize: "15px" }} onClick={handleClick}>Create a Routine +</button> */}
            </form>
            { routines ?
                routines.filter(routine => {
        
                    return `${routine.name}`
                    //After creating a post, I can't see my Posts because of a TypeError "Cannot read properties of undefined (reading "title") Post.js line 49:1
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    }).map((routine) => {
          console.log("ROUTINE CHECK-------",routine.activities.name)
                    return (
                        <>
                            {/* <div onClick={(event) => {
                                { handleFeaturedRoutine(event, routine) }
                            }}> */}
                                <h1>{routine.name}</h1>
                                <p>{routine.goal}</p>
                                <b>By: </b> {routine.creatorName}
                                {
                                routine.activities.map((activities) => {
                                    return(
                                        <>
                                        <div key = {activities.id}>
                                            <b>Name: </b> {activities.name} <br/>
                                            <b>Description:</b> {activities.description}<br/>
                                            <b>Duration:</b> {activities.duration} <br/>
                                            <b>Count:</b> {activities.count} <br/>
                                        </div>
                                        </>
                                    )
                                    })}
                        </>
                    );
                }): null
            }
        </div>
    );
};

export default Routines;