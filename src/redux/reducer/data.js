export const FETCH_DATA = "FETCH_DATA"
export const CREATE_TASK = "CREATE_TASK"
export const REMOVE_TASK = "DELETE_TASK"
export const CHANGE_TASK = "CHANGE_TASK"



let initialState = {
    data: []
}

export const data = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                data: action.payload
            }
        case CREATE_TASK:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case REMOVE_TASK:
            return {
                ...state,
                data: state.data.filter(task => task.id !== action.payload)
            }
        case CHANGE_TASK:
            const newData = [...state.data]
            newData.forEach(task => {
                if (task.id === action.payload.id) {
                    task.title = action.payload.title
                }
            })
            return {
                ...state, data: newData
            }
        default: return state
    }
}

