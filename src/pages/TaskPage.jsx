import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import {Button} from "../components/Button/Button"
import {changeTask, removeTask} from "../redux/reducer/action"
import {useDispatch} from "react-redux"

export const TaskPage = ({location}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    if (!location.state) {
        history.push('/')
    }

    const {id, title, number} = location.state ? location.state : {id: '', title: '', number: ''}
    const [newTitle, setNewTitle] = useState(title)

    const HandlerChangeTask = () => {
        if (newTitle) {
            dispatch(changeTask(id, newTitle))
        }
        history.push('/')
    }

    const HandleRemoveTask = () => {
        dispatch(removeTask(id))
        history.push('/')
    }

    return (
        <div className="task-refactor">
            <div className="task-refactor__header">Задача №{number}</div>
            <div className="task-refactor__text">Краткое описание</div>
            <input type="text" className="task-refactor__input" value={newTitle} onChange={e => setNewTitle(e.target.value)}/>
            <div className="task-refactor__buttons">
                <Button onSubmit={HandlerChangeTask} text={"Вернуться в список"} style={{"btn-blue": true}} />
                <Button onSubmit={HandleRemoveTask} text={'Удалить'} style={{"btn-red": true}} />
            </div>
        </div>
    )
}