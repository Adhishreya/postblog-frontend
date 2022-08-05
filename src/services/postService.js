import axios from 'axios'

const url = "http://localhost:8080/api/v1/posts"

export const fetchPosts = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${url}/`).then(res => {
            resolve(res.data);
        }).catch(e=>console.log(e))
    })
}

export const fetchById = (id) =>{
    return new Promise((resolve, reject) => {
        axios.get(`${url}/${id}`).then(res => {
            resolve(res.data);
        }).catch(e=>console.log(e))
    });
}

export const fetchMostLikedPosts = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${url}/popular`).then(res => {
            resolve(res.data);
            // console.log(res.data)
        }).catch(e=>console.log(e))
    })
}

export const fetchMostRecentPosts = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${url}/recent`).then(res => {
            resolve(res.data);
        }).catch(e=>console.log(e))
    })
}

export const savePost = (title,data,topics) => {
    return new Promise((resolve, reject) => {
        axios.post(`${url}/edit/save`,{postBody:data,postHeader:title,topics:topics},{headers:{Authorization:"Bearer "+localStorage.getItem('principal')}}).then(res => {
            resolve(res.data);
        }).catch(e=>console.log(e))
    });
}
