import axios from 'axios'

const url = "http://localhost:8080"

export const fetchPosts = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${url}/posts/`).then(res => {
            resolve(res.data);
        }).catch(e=>console.log(e))
    })
}

export const fetchById = (id) =>{
    return new Promise((resolve, reject) => {
        axios.get(`${url}/posts/${id}`).then(res => {
            console.log(res.data)
            resolve(res.data);
        }).catch(e=>console.log(e))
    });
}

export const fetchMostLikedPosts = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${url}/posts/popular`).then(res => {
            resolve(res.data);
            // console.log(res.data)
        }).catch(e=>console.log(e))
    })
}

export const fetchMostRecentPosts = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${url}/posts/recent`).then(res => {
            resolve(res.data);
        }).catch(e=>console.log(e))
    })
}
