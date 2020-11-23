import React from 'react'

function Icy() {

    const icyLink = [
        {
            name: "Balance Druid DPS Guide",
            color: "#FF7D0A",
            icon: "https://static.wikia.nocookie.net/wowpedia/images/6/66/Charactercreate-class_druid.png",
            link: "https://www.icy-veins.com/wow/balance-druid-pve-dps-guide"
        },
        {
            name: "Guardian Druid Tank Guide",
            color: "#FF7D0A",
            icon: "https://static.wikia.nocookie.net/wowpedia/images/6/66/Charactercreate-class_druid.png",
            link: "https://www.icy-veins.com/wow/guardian-druid-pve-tank-guide"
        },
        {
            name: "Brewmaster Monk Tank Guide",
            color: "#008467",
            icon: "https://static.wikia.nocookie.net/wowpedia/images/4/40/Charactercreate-class_monk.png",
            link: "https://www.icy-veins.com/wow/brewmaster-monk-pve-tank-guide"
        },
        {
            name: "Fury Warrior DPS Guide",
            color: "#C79C6E",
            icon: "https://static.wikia.nocookie.net/wowpedia/images/0/0f/Charactercreate-class_warrior.png",
            link: "https://www.icy-veins.com/wow/fury-warrior-pve-dps-guide"
        },
        {
            name: "Destruction Warlock DPS Guide",
            color: "#9482C9",
            icon: "https://static.wikia.nocookie.net/wowpedia/images/4/4f/Charactercreate-class_warlock.png",
            link: "https://www.icy-veins.com/wow/destruction-warlock-pve-dps-guide"
        },
        {
            name: "Frost Mage DPS Guide",
            color: "#69CCF0",
            icon: "https://static.wikia.nocookie.net/wowpedia/images/c/cc/Charactercreate-class_mage.png",
            link: "https://www.icy-veins.com/wow/frost-mage-pve-dps-guide"
        },
        {
            name: "Havoc Demon Hunter DPS Guide",
            color: "#a330c9",
            icon: "https://static.wikia.nocookie.net/wowpedia/images/9/97/Charactercreate-class_demonhunter.png",
            link: "https://www.icy-veins.com/wow/havoc-demon-hunter-pve-dps-guide"
        },
        {
            name: "Fire Mage DPS Guide",
            color: "#69CCF0",
            icon: "https://static.wikia.nocookie.net/wowpedia/images/c/cc/Charactercreate-class_mage.png",
            link: "https://www.icy-veins.com/wow/fire-mage-pve-dps-guide"
        },
        {
            name: "Arcane Mage DPS Guide ",
            color: "#69CCF0",
            icon: "https://static.wikia.nocookie.net/wowpedia/images/c/cc/Charactercreate-class_mage.png",
            link: "https://www.icy-veins.com/wow/arcane-mage-pve-dps-guide"
        }
    ]

    function compare(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }

    icyLink.sort(compare)

    return (
        <div className="icy_container">
            <ul className="icy_list">
                {icyLink.map((item, index) => {
                    return (
                        <li key={index} style={{ border: `1px solid ${item.color}` }}>
                            <span className="icy_icon"><img src={item.icon}></img></span>
                            <a rel="noreferrer" href={item.link} target="_blank">{item.name}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Icy