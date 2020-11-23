import React from 'react'
import Character from './Character'

function Home(props) {

    return (
        <div className="home_container">
            <section className="home_player">
                <h2 className="player_title">Survive95</h2>
                <ul className="player_list">
                    {props.data.map((item, index) => {
                        if (item.player === "1") {
                            return (
                                <Character key={index} data={item}></Character>
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
                                <Character key={index} data={item}></Character>
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
                                <Character key={index} data={item}></Character>
                            )
                        }
                    })}
                </ul>
            </section>
        </div>
    )
}

export default Home