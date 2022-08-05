import axios from "axios";

const url = "http://localhost:8080/api/v1/likes/"

export const getLikesById = async (id) =>{
    const likes = await axios.get(`${url}${id}`);
    return likes.data;
}