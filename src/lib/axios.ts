import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === 'development' ? "http://localhost:3000/api" : "https://chatify-backend-5kpndifsc-yemyathein67gmailcoms-projects.vercel.app/api",
    withCredentials: true,
});