const APIURL = `http://fitnesstrac-kr.herokuapp.com/api`;

//USER ENDPOINTS
export const fetchRegister = async (username, password) => {
    const response = await fetch(`${APIURL}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })

    const result = await response.json();
    console.log(result);

    if(!result.token){
        alert(result.error)
    } else {
        return(result.token)
    }
}


export const fetchActivities = async () => {
    const response = await fetch(`${APIURL}/activities`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application.json'
            },
        })

    const result = await response.json();
    console.log(result);
    return result
}
// fix try catch
export const fetchCreateActivity = async (token, name, description) => {
    const response = await fetch(`${APIURL}/activities`,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            name: name,
            description: description,
        })
    })

    const result = await response.json();
    console.log("POST FORM", result)
        alert("ACTIVITY POSTED!")
        return result
}

export const fetchUpdateRoutines = async (token, name, goal) => {
    try {
        const response = await fetch(`${APIURL}/routines`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application.json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                name: name,
                goal: goal
            })
        })
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error('Routine could not be updated', error)
    }
}

export const fetchAllRoutines = async () => {
    const response = await fetch(`${APIURL}/routines`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }})
    const result = await response.json();
    console.log(result);
    return result
}



export const fetchLogin = async (username, password) => {
    const response = await fetch(`${APIURL}/users/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })

    const result = await response.json();
    console.log(result);

    if(!result.token){
        alert(result.error)
    } else {
        return result
    }
}


export const fetchCreateRoutine = async (token, name, goal, isPublic) => {
    const response = await fetch(`${APIURL}/routines`,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            name: name,
            goal: goal,
            isPublic: isPublic
        })
    })

    const result = await response.json();
    console.log("POST FORM", result)
    if(!result.creatorId){
        alert(result.error)
    }else{
        alert("ROUTINE POSTED!")
        return result
    }
}

export const fetchDeleteRoutine = async (token, id) => {
    const response = await fetch(`${APIURL}/routines/${id}`,{
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })

    const result = await response.json();

        alert("ROUTINE DELETED!")
        return result

}