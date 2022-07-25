import axios from "axios";

const url = "http://localhost:8080"

const headers ={
    'X-Requested-With': 'XMLHttpRequest'
}

export const loginService = (user) => {

    axios.post(`${url}/login`, user,{headers:headers}).then(res => console.log(res)).catch(e => console.log(e));
}
export const registerService = (user) => {
    axios.post(`${url}/register`,user).then(res => console.log(res)).catch(e => console.log(e))
}