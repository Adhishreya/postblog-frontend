import { format, render, cancel, register } from 'timeago.js';

export const formatDate = (date) =>{
    let temp = new Date(date);
    return format(temp);
}