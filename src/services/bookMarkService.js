import axios from 'axios';

const url = "http://localhost:8080/"

export const addBookmark = (id) => {
    return new Promise((resolve, reject) => {
        axios.post(`${url}bookmark/${id}`,null,{headers:{Authorization:"Bearer "+localStorage.getItem('principal')}}).then(res => {
            resolve(res.data);
        }).catch(e=>console.log(e))
    });
}


export const getBookMarks = () =>{
    return new Promise ((resolve,reject)=>{
        axios.get(`${url}bookmark/`,{headers:{Authorization:"Bearer "+localStorage.getItem('principal')}}).then(res=>{
            resolve(res.data)
        }).catch(e=>console.log(e))
    })
}