import React from "react"
import {Button} from "../Button/Button"
import PropTypes from "prop-types"

export const ModalDelete = ({HandlerRemoveTask, setModalRemove}) => {



    return (
        <div className="overlay">
            <div className="modal">
                <div className="modal-delete">
                    <div className="modal-delete__title">Вы действительно хотите удалить?</div>
                    <div className="modal-delete__buttons">
                        <Button text={'Отмена'} onSubmit={() => (setModalRemove(''))} />
                        <Button text={'Удалить'} style={{"btn-red": true}} onSubmit={HandlerRemoveTask}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

ModalDelete.propTypes = {
    HandlerRemoveTask: PropTypes.func.isRequired,
    setModalRemove: PropTypes.func.isRequired
}