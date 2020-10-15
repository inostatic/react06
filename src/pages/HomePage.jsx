import React, {useEffect, useState} from "react"
import {Button} from "../components/Button/Button"
import {Task} from "../components/Task/Task"
import {ModalCreate} from "../components/Modal/ModalCreate"
import {ModalDelete} from "../components/Modal/ModalDelete"
import {useDispatch, useSelector} from "react-redux"
import {createTask, removeTask, fetchData} from "../redux/reducer/action"


export const HomePage = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.data.data)
    const [modalCreate, setModalCreate] = useState(false)
    const [modalRemove, setModalRemove] = useState('')

    useEffect(() => {
        dispatch(fetchData())
    }, [])


    const HandlerModalCreate = () => {
        setModalCreate(!modalCreate)
    }

    const HandlerCreateTask = (title) => {
        dispatch(createTask(title))
    }

    const HandlerRemoveTask = () => {
        dispatch(removeTask(+modalRemove))
        if (modalRemove.length) {
            setModalRemove('')
        }
    }



    return (
        <>
            <div className="header">
                <div className="header__title">Список задач</div>
                <div className="header__button">
                    <Button text={"Добавить"} onSubmit={HandlerModalCreate}/>
                </div>
            </div>
            <div className="task-list">
                {
                    data.map((task, index) =>  <Task key={index} number={index + 1} {...task} setModalRemove={setModalRemove} />)
                }
            </div>
            {
                modalCreate && <ModalCreate HandlerModal={HandlerModalCreate} HandlerCreateTask={HandlerCreateTask}/>
            }
            {
                modalRemove && <ModalDelete HandlerRemoveTask={HandlerRemoveTask} setModalRemove={setModalRemove} />
            }
        </>
    )
}