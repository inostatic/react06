import React from "react"
import Layer from '../../assets/icon/Layer.jpg'
import Vector from '../../assets/icon/Vector.jpg'
import {Link} from "react-router-dom";

export const Task = ({number, id, title, setModalRemove}) => {

    const DeleteTask = () => {
        setModalRemove(id)
    }
    return (
        <div className="task">
            <div className="task__title">Задача №{number}</div>
            <div className="task__content">{title}</div>
            <div className="task__buttons">
                <Link to={{
                    pathname: `/edit/${id}`,
                    state: {id, title, number}
                }}><img src={Vector} alt="#"/></Link>
                <button onClick={DeleteTask}><img src={Layer} alt="#"/></button>
            </div>
        </div>
    )
}