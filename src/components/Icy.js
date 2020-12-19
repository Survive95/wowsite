import React, { useEffect } from 'react'

function Icy() {

    const icons = [
        {
            name: "death king",
            icon: "https://static.wikia.nocookie.net/wowpedia/images/d/de/Charactercreate-class_deathknight.png",
            color: "#C41E3A"
        },
        {
            name: "demon hunter",
            icon: "https://static.wikia.nocookie.net/wowpedia/images/9/97/Charactercreate-class_demonhunter.png",
            color: "#a330c9"
        },
        {
            name: "druid",
            icon: "https://static.wikia.nocookie.net/wowpedia/images/6/66/Charactercreate-class_druid.png",
            color: "#FF7D0A"
        },
        {
            name: "hunter",
            icon: "https://static.wikia.nocookie.net/wowpedia/images/e/e8/Charactercreate-class_hunter.png",
            color: "#AAD372"
        },
        {
            name: "mage",
            icon: "https://static.wikia.nocookie.net/wowpedia/images/c/cc/Charactercreate-class_mage.png",
            color: "#69CCF0"
        },
        {
            name: "monk",
            icon: "https://static.wikia.nocookie.net/wowpedia/images/4/40/Charactercreate-class_monk.png",
            color: "#008467"
        },
        {
            name: "paladin",
            icon: "https://static.wikia.nocookie.net/wowpedia/images/f/fa/Charactercreate-class_paladin.png",
            color: "#F48CBA"
        },
        {
            name: "priest",
            icon: "https://static.wikia.nocookie.net/wowpedia/images/7/7e/Charactercreate-class_priest.png",
            color: "#FFFFFF"
        },
        {
            name: "rogue",
            icon: "https://static.wikia.nocookie.net/wowpedia/images/6/66/Charactercreate-class_rogue.png",
            color: "#FFF468"
        },
        {
            name: "shaman",
            icon: "https://static.wikia.nocookie.net/wowpedia/images/1/17/Charactercreate-class_shaman.png",
            color: "#0070DD"
        },
        {
            name: "warlock",
            icon: "https://static.wikia.nocookie.net/wowpedia/images/4/4f/Charactercreate-class_warlock.png",
            color: "#9482C9"
        },
        {
            name: "warrior",
            icon: "https://static.wikia.nocookie.net/wowpedia/images/0/0f/Charactercreate-class_warrior.png",
            color: "#C79C6E"
        }
    ]


    const icyLink = [
        {
            name : "Druid",
            link : "https://www.icy-veins.com/wow/balance-druid-pve-dps-guide"
        },
        {
            name : "Druid",
            link : "https://www.icy-veins.com/wow/guardian-druid-pve-tank-guide"
        },
        {
            name : "Monk",
            link : "https://www.icy-veins.com/wow/brewmaster-monk-pve-tank-guide"
        },
        {
            name : "Warrior",
            link : "https://www.icy-veins.com/wow/fury-warrior-pve-dps-guide"
        },
        {
            name : "Warlock",
            link : "https://www.icy-veins.com/wow/destruction-warlock-pve-dps-guide"
        },
        {
            name : "Mage",
            link : "https://www.icy-veins.com/wow/frost-mage-pve-dps-guide"
        },
        {
            name : "Mage",
            link : "https://www.icy-veins.com/wow/fire-mage-pve-dps-guide"
        },
        {
            name : "Mage",
            link : "https://www.icy-veins.com/wow/arcane-mage-pve-dps-guide"
        },
        {
            name : "Paladin",
            link : "https://www.icy-veins.com/wow/retribution-paladin-pve-dps-guide"
        },
        {
            name : "Demon Hunter",
            link : "https://www.icy-veins.com/wow/havoc-demon-hunter-pve-dps-guide"
        },
        {
            name : "Rogue",
            link : "https://www.icy-veins.com/wow/subtlety-rogue-pve-dps-guide"
        },
        {
            name : "Rogue",
            link : "https://www.icy-veins.com/wow/outlaw-rogue-pve-dps-guide"
        },
        {
            name : "Rogue",
            link : "https://www.icy-veins.com/wow/assassination-rogue-pve-dps-guide"
        },
    ]

    function compare(a, b) {
        if (a.link < b.link) {
            return -1;
        }
        if (a.link > b.link) {
            return 1;
        }
        return 0;
    }

    icyLink.sort(compare)


    icyLink.sort()

    return (
        <div className="icy_container">
            <ul className="icy_list">
                {icyLink.map((item, index) => {
                    return (
                        icons.map(ico => {
                            if (item.name.toLowerCase() === ico.name) {
                                return (
                                    <li key={index}>
                                        <a rel="noreferrer" href={item.link} target="_blank"><span className="icy_icon"><img style={{ border: `2px solid ${ico.color}`}} src={ico.icon}></img></span>{item.link.split('/wow/')[1].split('-').join(' ')}</a>
                                    </li>
                                )
                            }
                        })
                    )
                })}
            </ul>
        </div>
    )
}

export default Icy