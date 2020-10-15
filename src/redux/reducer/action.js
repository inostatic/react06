import {FETCH_DATA, CREATE_TASK, REMOVE_TASK, CHANGE_TASK} from "./data"
import {Axios} from "../../api/api";

export const fetchData = () => async (dispatch) => {
    try {
        const data = await Axios.getList()
        if (data) {
            dispatch(fetchDataAC(data))
        }
    } catch (e) {
        throw new Error(e)
    }
}

export const createTask = (title) => async (dispatch) => {
    try {
        const id = await Axios.createTask(title)
        if (id) {
            dispatch(createTaskAC({id, title}))
        }
    } catch (e) {
        throw new Error(e)
    }
}

export const removeTask = (id) => async (dispatch) => {
    try {
        const result = await Axios.removeTask(id)
        if (result) {
            dispatch(removeTaskAC(id))
        }
    } catch (e) {
        throw new Error(e)
    }
}

export const changeTask = (id, title) => async (dispatch) => {
    try {
        const result = await Axios.changeTask(id, title)
        if (result) {
            dispatch(changeTaskAC({id, title}))
        }
    } catch (e) {
        throw new Error(e)
    }
}

export const fetchDataAC = (payload) => ({type: FETCH_DATA, payload })
export const createTaskAC = (payload) => ({type: CREATE_TASK, payload })
export const removeTaskAC = (payload) => ({type: REMOVE_TASK, payload })
export const changeTaskAC = (payload) => ({type: CHANGE_TASK, payload })