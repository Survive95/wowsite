import React, { createRef, useState } from 'react'
import axios from 'axios'

function Raider() {

    let inputName = createRef()
    let inputServer = createRef()
    let selectRegion = createRef()

    const [result, setResult] = useState([])
    const [show, setShow] = useState(false)

    const back = function(){
        setShow(false)
        setResult([])
    }

    const sendForm = function (e) {
        e.preventDefault();
        let name = inputName.current.value.toLowerCase()
        let server = inputServer.current.value.toLowerCase()
        let region = selectRegion.current.value.toLowerCase()

        axios.get(`https://raider.io/api/v1/characters/profile?region=${region}&realm=${server}&name=${name}`)
            .then(res => {
                console.log(res);
                setResult(res.data)
            })
            .then(() => {
                setShow(true)
            })
            .catch(() => {
                setResult([])
            })

    }

    return (
        <div className="raider_container">
            {!show ? <form onSubmit={(e) => sendForm(e)} className="raider_form">
                <h3 className="form_title">Rechercher un personnage Raider.io</h3>
                <label>Sélectionner la région</label>
                <select ref={selectRegion} required>
                    <option defaultValue="eu">EU</option>
                    <option defaultValue="us">US</option>
                    <option defaultValue="kr">KR</option>
                    <option defaultValue="tw">TW</option>
                </select>
                <label>Nom du personnage :</label>
                <input ref={inputName} name="character" required type="text"></input>
                <label>Nom du serveur :</label>
                <input ref={inputServer} name="server" required type="text"></input>
                <button>Rechercher</button>
            </form> : <button onClick={() => back()} className="back_button"><i className="fas fa-long-arrow-alt-left"></i>Retour</button>}
            {show ? <ul className="raider_search">
                {result.length > 0 ? result.map((item, index) => {
                    return (
                        <li key={index}>
                            <a target="_blank" href={item.profile_url}>
                                <img src={item.thumbnail_url}></img>
                                <p>{item.name}</p>
                            </a>
                        </li>
                    )
                }) :
                    <li>
                        <a target="_blank" href={result.profile_url}>
                            <img src={result.thumbnail_url}></img>
                            <p>{result.name}</p>
                        </a>
                    </li>}
            </ul> : ''}
        </div>
    )
}

export default Raider