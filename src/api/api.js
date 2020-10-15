import axios from "axios"

export class Axios {
    static async getList() {
        try {
            const result = await axios.get('https://test.megapolis-it.ru/api/list')
            return result.data.data
        } catch (e) {
            console.log(e)
        }

    }

    static async createTask(title) {
        try {
            const result = await axios.post('https://test.megapolis-it.ru/api/list', {title})
            return result.data.id
        } catch (e) {
            console.log(e)
        }
    }

    static async removeTask(id) {
        try {
            const result = await axios.delete(`https://test.megapolis-it.ru/api/list/${id}`)
            return result.data.success
        } catch (e) {
            console.log(e)
        }
    }

    static async changeTask(id, title) {
        try {
            const result = await axios.post(`https://test.megapolis-it.ru/api/list/${id}`, {title})
            return result.data.success
        } catch (e) {
            console.log(e)
        }
    }
}