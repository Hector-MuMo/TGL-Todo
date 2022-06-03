const axios = require('axios').default;

const getData = async () => {
    try {
        let res = await axios.get("https://tgl-todo-api.herokuapp.com/todo/")
        return await res.data
    } catch (error) {
        console.log(error);
    }

}

const createData = async (data) => {
    try {
        let res = await axios.post(`https://tgl-todo-api.herokuapp.com/todo/`, data)
        return await res.data
    } catch (error) {
        console.log(error);
    }
}

const updateData = async (id, data) => {
    try {
        let res = await axios.put(`https://tgl-todo-api.herokuapp.com/todo/${id}`, data)
        return await res.data
    } catch (error) {
        console.log(error);
    }
}

const deleteData = async (id) => {
    try {
        let res = await axios.delete(`https://tgl-todo-api.herokuapp.com/todo/${id}`)
        return await res.data
    } catch (error) {
        console.log(error);
    }
}

export { getData, createData, updateData, deleteData }