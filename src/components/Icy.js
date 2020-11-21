import React from 'react'

function Icy() {

    const icons = [
        {
            name: "Death Knight",
            image: "https://static.wikia.nocookie.net/wowpedia/images/d/de/Charactercreate-class_deathknight.png",
            color: "#C41F3B"
        },
        {
            name: "Demon Hunter",
            image: "https://static.wikia.nocookie.net/wowpedia/images/9/97/Charactercreate-class_demonhunter.png",
            color: "#a330c9"
        },
        {
            name: "Druid",
            image: "https://static.wikia.nocookie.net/wowpedia/images/6/66/Charactercreate-class_druid.png",
            color: "#FF7D0A"
        },
        {
            name: "Hunter",
            image: "https://static.wikia.nocookie.net/wowpedia/images/e/e8/Charactercreate-class_hunter.png",
            color: "#ABD473"
        },
        {
            name: "Mage",
            image: "https://static.wikia.nocookie.net/wowpedia/images/c/cc/Charactercreate-class_mage.png",
            color: "#69CCF0"
        },
        {
            name: "Monk",
            image: "https://static.wikia.nocookie.net/wowpedia/images/4/40/Charactercreate-class_monk.png",
            color: "#008467"
        },
        {
            name: "Paladin",
            image: "https://static.wikia.nocookie.net/wowpedia/images/f/fa/Charactercreate-class_paladin.png",
            color: "#F58CBA"
        },
        {
            name: "Priest",
            image: "https://static.wikia.nocookie.net/wowpedia/images/7/7e/Charactercreate-class_priest.png",
            color: "#fff"
        },
        {
            name: "Rogue",
            image: "https://static.wikia.nocookie.net/wowpedia/images/6/66/Charactercreate-class_rogue.png",
            color: "#FFF569"
        },
        {
            name: "Shaman",
            image: "https://static.wikia.nocookie.net/wowpedia/images/1/17/Charactercreate-class_shaman.png",
            color: "#0070DE"
        },
        {
            name: "Warlock",
            image: "https://static.wikia.nocookie.net/wowpedia/images/4/4f/Charactercreate-class_warlock.png",
            color: "#9482C9"
        },
        {
            name: "Warrior",
            image: "https://static.wikia.nocookie.net/wowpedia/images/0/0f/Charactercreate-class_warrior.png",
            color: "#C79C6E"
        }
    ]

    return (
        <div className="icy_container">
            <ul className="icy_list">

                <li style={{border : `1px solid #FF7D0A`}}>
                    <span className="icy_icon">{icons.map(item => {
                        if (item.name === "Druid") {
                            return (
                                <img src={item.image}></img>
                            )
                        }
                    })}</span>
                    <a rel="noreferrer" href="https://www.icy-veins.com/wow/balance-druid-pve-dps-guide" target="_blank">Balance Druid DPS Guide</a>
                </li>

                <li style={{border : `1px solid #FF7D0A`}}>
                    <span className="icy_icon">{icons.map(item => {
                        if (item.name === "Druid") {
                            return (
                                <img src={item.image}></img>
                            )
                        }
                    })}</span>
                    <a rel="noreferrer" href="https://www.icy-veins.com/wow/guardian-druid-pve-tank-guide" target="_blank">Guardian Druid Tank Guide</a>
                </li>

                <li style={{border : `1px solid #008467`}}>
                    <span className="icy_icon">{icons.map(item => {
                        if (item.name === "Monk") {
                            return (
                                <img src={item.image}></img>
                            )
                        }
                    })}</span>
                    <a rel="noreferrer" href="https://www.icy-veins.com/wow/brewmaster-monk-pve-tank-guide" target="_blank">Brewmaster Monk Tank Guide</a>
                </li>

                <li style={{border : `1px solid #C79C6E`}}>
                    <span className="icy_icon">{icons.map(item => {
                        if (item.name === "Warrior") {
                            return (
                                <img src={item.image}></img>
                            )
                        }
                    })}</span>
                    <a rel="noreferrer" href="https://www.icy-veins.com/wow/fury-warrior-pve-dps-guide" target="_blank">Fury Warrior DPS Guide</a>
                </li>

                <li style={{border : `1px solid #9482C9`}}>
                    <span className="icy_icon">{icons.map(item => {
                        if (item.name === "Warlock") {
                            return (
                                <img src={item.image}></img>
                            )
                        }
                    })}</span>
                    <a rel="noreferrer" href="https://www.icy-veins.com/wow/destruction-warlock-pve-dps-guide" target="_blank">Destruction Warlock DPS Guide</a>
                </li>

                <li style={{border : `1px solid #69CCF0`}}>
                    <span className="icy_icon">{icons.map(item => {
                        if (item.name === "Mage") {
                            return (
                                <img src={item.image}></img>
                            )
                        }
                    })}</span>
                    <a rel="noreferrer" href="https://www.icy-veins.com/wow/frost-mage-pve-dps-guide" target="_blank">Frost Mage DPS Guide</a>
                </li>

                <li style={{border : `1px solid #a330c9`}}>
                    <span className="icy_icon">{icons.map(item => {
                        if (item.name === "Demon Hunter") {
                            return (
                                <img src={item.image}></img>
                            )
                        }
                    })}</span>
                    <a rel="noreferrer" href="https://www.icy-veins.com/wow/havoc-demon-hunter-pve-dps-guide" target="_blank">Havoc Demon Hunter DPS Guide</a>
                </li>

            </ul>
        </div>
    )
}

export default Icy