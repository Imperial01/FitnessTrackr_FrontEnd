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
