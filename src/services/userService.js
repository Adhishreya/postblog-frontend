import axios from "axios";

const url = "http://localhost:8080"

const headers = {
    'X-Requested-With': 'XMLHttpRequest'
}

export const loginService = ({ email, password }) => {

    axios.post(`${url}/auth/login`, { email, password }, { headers: headers }).then(res =>{
         localStorage.setItem("principal",res.data.accessToken);
         localStorage.setItem("principal-user",res.data.username);
         console.log(res.data.accessToken)
        }).catch(e => console.log(e));
}
export const registerService = ({ username, email, password }) => {
    axios.post(`${url}/auth/signup`, { username, email, password }).then(res => {
        console.log(res);
    }).catch(e => console.log(e))
}