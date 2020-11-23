import React from 'react'

function Character(props) {

    return (
        <a rel="noreferrer" href={props.data.wowlink} target="_blank">
            <li style={{ backgroundImage: `url('${props.data.main}')` }}>
                <div className="player_top">
                    <div className="player_details">
                        <p>{props.data.name}</p>
                        <p>{props.data.realm}</p>
                    </div>
                    <div className="player_details">
                        <p>{props.data.gender}</p>
                        <p>{props.data.race}</p>
                    </div>
                    <p className="player_level">{props.data.level}</p>
                </div>
                <div className="player_details">
                    <p>{props.data.class}</p>
                    <p>{props.data.faction}</p>
                </div>
            </li>
        </a>
    )
}

export default Character