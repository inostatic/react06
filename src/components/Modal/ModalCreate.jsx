import React, {useState} from "react"
import Close from "../../assets/icon/Close.jpg"
import {Button} from "../Button/Button"
import PropTypes from 'prop-types'

export const ModalCreate = ({HandlerModal, HandlerCreateTask}) => {
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')

    const createNewTask = () => {
        if (title) {
            HandlerCreateTask(title)
            HandlerModal()
        } else {
            setMessage('Заголовок не может быть пустым')
        }
    }

    return (
        <div className="overlay">
            <div className="modal">
                <div className="modal-create__header">
                    <div className="modal-create__title">Краткое описание</div>
                    <button onClick={HandlerModal}><img src={Close} alt="#"/></button>
                </div>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <div className="message">{message}</div>
                <div className="modal-create__button">
                    <Button text={"Создать"} onSubmit={createNewTask} />
                </div>
            </div>
        </div>

    )
}

ModalCreate.propTypes = {
    HandlerModal: PropTypes.func.isRequired,
    HandlerCreateTask: PropTypes.func.isRequired
}