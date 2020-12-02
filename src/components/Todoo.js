import React, { createRef, useEffect, useState } from 'react'
import axios from 'axios'
import { uid } from 'uid'

function Todoo() {

    const [todoo, setTodoo] = useState([])

    const inputTodoo = createRef()

    useEffect(() => {

        inputTodoo.current.focus()

        if (localStorage.getItem('todoo')) {
            setTodoo(JSON.parse(localStorage.getItem('todoo')))
        }
        else {
            setTodoo([])
        }
    }, [])


    const addTodoo = function (e) {
        e.preventDefault();
        if (inputTodoo.current.value === "") {
            inputTodoo.current.focus()
        }
        else {
            let arryrr = todoo
            let item = {
                id: uid(),
                label: inputTodoo.current.value,
                done: false
            }
            setTodoo(old => [...old, item])
            localStorage.setItem('todoo', JSON.stringify([...arryrr, item]))
            inputTodoo.current.value = ""
        }
    }


    const deleteTodoo = function (id) {
        let newArray = [...todoo]
        newArray.map(item => {
            if (item.id === id) {
                newArray.splice(newArray.indexOf(item), 1)
            }
        })
        console.log(newArray);
        setTodoo(newArray)
        localStorage.setItem('todoo', JSON.stringify(newArray))
    }

    const valide = function (id) {
        let newArr = [...todoo]
        newArr.map(item => {
            if (item.id === id) {
                let idItem = newArr.indexOf(item)
                if (item.done) {
                    newArr[idItem].done = false
                }
                else {
                    newArr[idItem].done = true
                }
            }
        })
        setTodoo(newArr)
        localStorage.setItem('todoo', JSON.stringify(newArr))
    }

    return (
        <div>
            <form onSubmit={(e) => addTodoo(e)} className="todoo_form">
                <input required placeholder="Nouvelle tâche ?" ref={inputTodoo} type="text"></input>
                <button>Ajouter</button>
            </form>
            <ul className="todoo_list">
                {todoo.map((item, index) => {
                    return (
                        <li className={item.done ? "active" : ''} key={index}>
                            {item.label}
                            <div className="lidiv_button">
                                <button onClick={() => valide(item.id)}>{item.done ? <i className="fas fa-check"></i> : <i className="far fa-square"></i>}</button>
                                <button onClick={() => deleteTodoo(item.id)}><i className="fas fa-times"></i></button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Todoo