import axios from "axios";
export default axios.create({
    // baseURL: "http://localhost:8000/",
    baseURL: "https://backend2-production.up.railway.app/",
    headers: {
        "Content-type": "application/json"
    }
})