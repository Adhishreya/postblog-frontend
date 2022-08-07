import axios from "axios";

const url = "http://localhost:8080"

const headers = {
    'X-Requested-With': 'XMLHttpRequest'
}

export const loginService = async ({ email, password }) => {

    try {
        const user = await axios.post(`${url}/auth/login`, { email, password }, { headers: headers });
        if (user.data)
        {
            const details = await axios.get(`${url}/image`, { headers:{Authorization:"Bearer "+user.data.accessToken} });
            user.data['image'] = details.data.image;
            user.data['id'] = details.data.id;
        }
        return user.data;
    }
    catch (err){
        return null;
    }
}
export const registerService = ({ username, email, password }) => {
    axios.post(`${url}/auth/signup`, { username, email, password }).then(res => {
    }).catch(e => console.log(e))
}

export const follow = (id,accessToken) =>{
    axios.post(`${url}/follow/${id}`,null,{headers:{Authorization:"Bearer "+accessToken}}).then(res=>console.log(res)).catch(e => console.log(e));
}


export const getFollowers = (id) =>{
    return new Promise((resolve, reject) => {
        axios.get(`${url}/api/v1/find/followers/${id}`).then(res => {
            resolve(res.data);
        }).catch(e=>console.log(e))
    });
}

export const getFollowing = (id) =>{
    return new Promise((resolve, reject) => {
        axios.get(`${url}/api/v1/find/following/${id}`).then(res => {
            resolve(res.data);
        }).catch(e=>console.log(e))
    });
}