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
    try {
        const response = await fetch(`${APIURL}/activities`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application.json'
            },
        })

    const result = await response.json();
    console.log(result);

    } catch (error) {
        throw error;
    }
}

export const fetchCreateActivity = async (name, description) => {
    try {
        const response = await fetch(`${APIURL}/activities`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application.json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                name: name,
                description: description
            })    
        })
    
    const result = await response.json();
    console.log(result);
    } catch (error) {
        console.error('Activity already created', error);
    }
}

export const fetchUpdateActivities = async (name, description, activityId) => {
    try {
        const response = await fetch(`${APIURL}/Aactivities/${activityId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application.json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                name: name,
                description: description
            })
        })
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error('Activity could not be updated', error)
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


export const fetchCreateRoutine = async (name, goal, isPublic) => {
    const response = await fetch(`${APIURL}/routines`,{
        method: "POST",
        body: JSON.stringify({
            name: name,
            goal: goal,
            isPublic: isPublic
        })
    })

    const result = await response.json();
    console.log("POST FORM", result)
    return result
    

}