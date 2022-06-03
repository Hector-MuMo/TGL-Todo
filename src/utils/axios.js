const axios = require('axios').default;

const getData = async () => {
    try {
        let res = await axios.get("http://localhost:3001/todo/")
        return await res.data
    } catch (error) {
        console.log(error);
    }

}

const createData = async (data) => {
    try {
        let res = await axios.post(`http://localhost:3001/todo/`, data)
        return await res.data
    } catch (error) {
        console.log(error);
    }
}

const updateData = async (id, data) => {
    try {
        let res = await axios.put(`http://localhost:3001/todo/${id}`, data)
        return await res.data
    } catch (error) {
        console.log(error);
    }
}

const deleteData = async (id) => {
    try {
        let res = await axios.delete(`http://localhost:3001/todo/${id}`)
        return await res.data
    } catch (error) {
        console.log(error);
    }
}

export { getData, createData, updateData, deleteData }