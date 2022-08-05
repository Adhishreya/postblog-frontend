import axios from "axios";

const url = "http://localhost:8080"

const headers = {
    'X-Requested-With': 'XMLHttpRequest'
}

export const loginService = async ({ email, password }) => {

    try {
        const user = await axios.post(`${url}/auth/login`, { email, password }, { headers: headers });
        //    .then(res =>{
        // localStorage.setItem("principal", user.data.accessToken);
        // localStorage.setItem("principal-user", user.data.username);
        return user.data;
    }
    catch (err){
        return null;
    }
    // }).catch(e => console.log(e));
}
export const registerService = ({ username, email, password }) => {
    axios.post(`${url}/auth/signup`, { username, email, password }).then(res => {
    }).catch(e => console.log(e))
}

export const follow = (id,accessToken) =>{
    axios.post(`${url}/follow/${id}`,null,{headers:{Authorization:"Bearer "+accessToken}}).then(res=>console.log(res)).catch(e => console.log(e));
}


export const getFollowers = (id,accessToken) =>{
    console.log(id)
    return new Promise((resolve, reject) => {
        axios.post(`${url}/find/followers/${id}`,null,{headers:{Authorization:"Bearer "+accessToken}}).then(res => {
            console.log(res.data)
            resolve(res.data);
        }).catch(e=>console.log(e))
    });
//    .then(res=>console.log(res)).catch(e => console.log(e));
}

export const getFollowing = (id,accessToken) =>{
    return new Promise((resolve, reject) => {
        axios.post(`${url}/find/following/${id}`,null,{headers:{Authorization:"Bearer "+accessToken}}).then(res => {
            resolve(res.data);
        }).catch(e=>console.log(e))
    });
}