import React, { createRef, useState } from 'react'
import axios from 'axios'

function Raider() {

    let inputName = createRef()
    let inputServer = createRef()
    let selectRegion = createRef()

    const [result, setResult] = useState([])

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
            .catch(() => {
                setResult([])
            })

    }

    return (
        <div className="raider_container">
            <form onSubmit={(e) => sendForm(e)} className="raider_form">
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
            </form>
            {result.length > 0 ? <ul className="raider_search">
                {result.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.profile_url}>
                                <img src={item.thumbnail_url}></img>
                                <p>{item.name}</p>
                            </a>
                        </li>
                    )
                })}
            </ul> : <ul className="raider_search">
                    <li>
                        <a href={result.profile_url}>
                            <img src={result.thumbnail_url}></img>
                            <p>{result.name}</p>
                        </a>
                    </li></ul>}

        </div>
    )
}

export default Raider