import React, { createRef, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { uid } from 'uid'

function Todoo() {

    const [todoo, setTodoo] = useState([])

    const inputTodoo = createRef()
    const titleTodoo = createRef()

    useEffect(() => {

        titleTodoo.current.focus()

        if (localStorage.getItem('todoo')) {
            setTodoo(JSON.parse(localStorage.getItem('todoo')))
        }
        else {
            setTodoo([])
        }
    }, [])


    const addTodoo = function (e) {
        e.preventDefault();
        if (inputTodoo.current.value === "" && titleTodoo.current.value === "") {
            inputTodoo.current.focus()
        }
        else {
            let arryrr = todoo
            let item = {
                id: uid(),
                label: inputTodoo.current.value,
                title : titleTodoo.current.value
            }
            setTodoo(old => [...old, item])
            localStorage.setItem('todoo', JSON.stringify([...arryrr, item]))
            inputTodoo.current.value = ""
            titleTodoo.current.value = ""
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

    return (
        <div>
            <form onSubmit={(e) => addTodoo(e)} className="todoo_form">
                <input autoComplete="off" ref={titleTodoo} required type="text" placeholder="Nom du lien"></input>
                <input required placeholder="Url" ref={inputTodoo} type="url"></input>
                <button>Ajouter</button>
            </form>
            <ul className="todoo_list">
                {todoo.map((item, index) => {
                    return (
                        <li key={index}>
                            <div>
                                <p>{item.title}</p>
                                <a target='_blank' href={item.label}>{item.label}</a>
                            </div>
                            <div className="lidiv_button">
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