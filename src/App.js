import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";
import Home from './components/Home';
import Elvui from './components/Elvui';
import Icy from './components/Icy';
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {

  const players = [
    {
      name: "sibjorn",
      realm: "elune",
      player: "1",
      link: "https://worldofwarcraft.com/fr-fr/character/eu/elune/sibjorn"
    },
    {
      name: "elyndra",
      realm: "elune",
      player: "1",
      link: "https://worldofwarcraft.com/fr-fr/character/eu/elune/elyndra"
    },
    {
      name: "celya",
      realm: "archimonde",
      player: "1",
      link: "https://worldofwarcraft.com/fr-fr/character/eu/archimonde/celya"
    },
    {
      name: "kiiruä",
      realm: "conseil-des-ombres",
      player: "2",
      link: "https://worldofwarcraft.com/fr-fr/character/eu/conseil-des-ombres/kiiru%C3%A4"
    },
    {
      name: "sânka",
      realm: "elune",
      player: "2",
      link: "https://worldofwarcraft.com/fr-fr/character/eu/elune/s%C3%A2nka"
    },
    {
      name: "elâria",
      realm: "archimonde",
      player: "2",
      link: "https://worldofwarcraft.com/fr-fr/character/eu/archimonde/el%C3%A2ria"
    },
    {
      name: "sänk",
      realm: "elune",
      player: "2",
      link: "https://worldofwarcraft.com/fr-fr/character/eu/elune/s%C3%A4nk"
    },

  ]

  const [datas, setDatas] = useState([])

  useEffect(() => {
    players.map(item => {
      axios.get(`https://eu.api.blizzard.com/profile/wow/character/${item.realm}/${item.name}/appearance?namespace=profile-eu&locale=fr_FR&access_token=USDBe25Z43D4TLy0hfNGnB9oDJ7jXjHM1y`)
        .then(res => {
          axios.get(`https://eu.api.blizzard.com/profile/wow/character/${item.realm}/${item.name}/character-media?namespace=profile-eu&locale=fr_FR&access_token=USDBe25Z43D4TLy0hfNGnB9oDJ7jXjHM1y`)
            .then(media => {
              setDatas(old => [...old, {
                id: res.data.character.id,
                name: res.data.character.name,
                realm: res.data.character.realm.name,
                realmslug: item.realm,
                faction: res.data.faction.name,
                gender: res.data.gender.name,
                class: res.data.playable_class.name,
                race: res.data.playable_race.name,
                avatar: media.data.assets[0].value,
                inset: media.data.assets[1].value,
                main: media.data.assets[2].value,
                mainr: media.data.assets[3].value,
                player: item.player,
                wowlink: item.link
              }])
            })
        })
    })
  }, [])


  return (
    <div className="App">
      <div className="background_top">
        <div className="background_top-overlay"></div>
      </div>
      <Router>
        <header className="header_app">
          <div className="header_container">
            <h1 className="header_title">Wow Project</h1>
            <nav className="header_nav">
              <NavLink exact to="/">Accueil</NavLink>
              <NavLink exact to="/elvui">Elvui</NavLink>
              <NavLink exact to="/icy">Icy Veins</NavLink>
            </nav>
          </div>
        </header>
        <main className="main_app">
          <Route exact path="/" >
            <Home data={datas}></Home>
          </Route>
          <Route exact path="/elvui" component={Elvui}></Route>
          <Route exact path="/icy" component={Icy}></Route>
        </main>
      </Router>
    </div>
  );
}

export default App;
