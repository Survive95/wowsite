import React from 'react'

function Home(props) {

    return (
        <div className="home_container">
            <section className="home_player">
                <h2 className="player_title">Survive95</h2>
                <ul className="player_list">
                    {props.data.map((item, index) => {
                        if (item.player === "1") {
                            return (
                                <a rel="noreferrer" key={index} href={item.wowlink} target="_blank">
                                    <li style={{ backgroundImage: `url('${item.main}')` }}>
                                        <div className="player_top">
                                            <div className="player_details">
                                                <p>{item.name}</p>
                                                <p>{item.realm}</p>
                                            </div>
                                            <div className="player_details">
                                                <p>{item.gender}</p>
                                                <p>{item.race}</p>
                                            </div>
                                            <p className="player_level">{item.level}</p>
                                        </div>
                                        <div className="player_details">
                                            <p>{item.class}</p>
                                            <p>{item.faction}</p>
                                        </div>
                                    </li>
                                </a>
                            )
                        }
                    })}
                </ul>
            </section>
            <section className="home_player">
                <h2 className="player_title">SaNka</h2>
                <ul className="player_list">
                    {props.data.map((item, index) => {
                        if (item.player === "2") {
                            return (
                                <a rel="noreferrer" key={index} href={item.wowlink} target="_blank">
                                    <li style={{ backgroundImage: `url('${item.main}')` }}>
                                        <div className="player_top">
                                            <div className="player_details">
                                                <p>{item.name}</p>
                                                <p>{item.realm}</p>
                                            </div>
                                            <div className="player_details">
                                                <p>{item.gender}</p>
                                                <p>{item.race}</p>
                                            </div>
                                            <p className="player_level">{item.level}</p>
                                        </div>
                                        <div className="player_details">
                                            <p>{item.class}</p>
                                            <p>{item.faction}</p>
                                        </div>
                                    </li>
                                </a>
                            )
                        }
                    })}
                </ul>
            </section>
            <section className="home_player">
                <h2 className="player_title">Othior</h2>
                <ul className="player_list">
                    {props.data.map((item, index) => {
                        if (item.player === "3") {
                            return (
                                <a rel="noreferrer" key={index} href={item.wowlink} target="_blank">
                                    <li style={{ backgroundImage: `url('${item.main}')` }}>
                                        <div className="player_top">
                                            <div className="player_details">
                                                <p>{item.name}</p>
                                                <p>{item.realm}</p>
                                            </div>
                                            <div className="player_details">
                                                <p>{item.gender}</p>
                                                <p>{item.race}</p>
                                            </div>
                                            <p className="player_level">{item.level}</p>
                                        </div>
                                        <div className="player_details">
                                            <p>{item.class}</p>
                                            <p>{item.faction}</p>
                                        </div>
                                    </li>
                                </a>
                            )
                        }
                    })}
                </ul>
            </section>
        </div>
    )
}

export default Home