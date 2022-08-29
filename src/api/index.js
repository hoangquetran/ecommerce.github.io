import axios from "axios";

const productAPI = axios.create({
    baseURL: 'https://fakestoreapi.com/',
});

export default productAPI;