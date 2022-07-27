import axios from "axios";

const url = "http://localhost:8080/comments/"

export const getCommentsById = async (id) =>{
    const comments = await axios.get(`${url}${id}`);
    return comments.data;
}