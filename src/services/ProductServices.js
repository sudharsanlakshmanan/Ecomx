import axios from "axios"

export const fetchProductsApi = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
};

export const fetchCategoriesApi = async () => {
    const res = await axios.get("https://fakestoreapi.com/products/categories");
    return res.data;
};

export const fetchProductByIdApi = async (id) => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return res.data;
};