import axios from "axios";

const avazbek = axios.create({
  baseURL: "https://fn27.vimlc.uz/",  
});


avazbek.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token'); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; 
    }
    return config; 
  },
  error => {
    return Promise.reject(error);  
  }
);

export default avazbek;  
