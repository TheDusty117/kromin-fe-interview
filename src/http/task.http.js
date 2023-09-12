import axios from './'
import { TASK_MODEL } from '../models'

const TasksAPI = {
    getTasks: () => {
        const url = 'https://todoapp.backend.k-stage.dev/api/todos'
        return axios.get(url)
    },
    addTask: data => {
        const url = 'https://todoapp.backend.k-stage.dev/api/todos'
        return axios.post(url, data)
    },
    editTask: data => {
        const url = `https://todoapp.backend.k-stage.dev/api/todos/${
            data?.[TASK_MODEL.id]
        }`
        return axios.patch(url, data)
    },
    deleteTask: id => {
        const url = `https://todoapp.backend.k-stage.dev/api/todos/${id}`
        return axios.delete(url)
    },
    orderTasks: data => {
        const url = 'https://todoapp.backend.k-stage.dev/api/todos/order'
        return axios.post(url, { todos: [...data] })
    },
}

export default TasksAPI
