import {data} from "./data"
import {fetchDataAC, createTaskAC, removeTaskAC, changeTaskAC} from "./action"

let initialState = {
    data: []
}

test('should return data', () => {
    const newData = [
        {id: 13, title: 'title13'},
        {id: 14, title: 'title14'},
        {id: 15, title: 'title15'}
    ]
    const action = fetchDataAC(newData)
    const newState = data(initialState, action)
    expect(newState.data.length).toBe(3)
    expect(newState.data[2].title).toBe("title15")
})

initialState = {
    data: [
        {id: 13, title: 'title13'},
        {id: 14, title: 'title14'},
        {id: 15, title: 'title15'}
    ]
}

test('should return new data', () => {
    const newTask = {id: 14, title: 'new task'}
    const action = createTaskAC(newTask)
    const newState = data(initialState, action)
    expect(newState.data.length).toBe(4)
    expect(newState.data[3].title).toBe("new task")
})

test('remove task', () => {
    const id = 14
    const action = removeTaskAC(id)
    const newState = data(initialState, action)
    expect(newState.data.length).toBe(2)
    expect(newState.data[1].id).toBe(15)
})

test('change task', () => {
    const id = 14
    const title = 'update task'
    const action = changeTaskAC({id, title})
    const newState = data(initialState, action)
    expect(newState.data.length).toBe(3)
    expect(newState.data[1].title).toBe('update task')
})

