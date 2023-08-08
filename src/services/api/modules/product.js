import axios from "axios";

export default {
    findProductById: async (id) => {
        return await axios.get(`${process.env.REACT_APP_SERVER_HOST_API}/products/` + id)
    },
    search: async function (searchString) {
        return await axios.get(`${process.env.REACT_APP_SERVER_HOST_API}/products?search=${searchString}`)
    }
}