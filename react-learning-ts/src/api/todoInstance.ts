import axios from "axios";


const todoInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

export default todoInstance;