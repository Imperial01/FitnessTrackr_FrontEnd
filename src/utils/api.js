const APIURL = `http://fitnesstrac-kr.herokuapp.com/api`

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