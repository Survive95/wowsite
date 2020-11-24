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
import Raider from './components/Raider';

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
    {
      name: "nyvram",
      realm: "elune",
      player: "3",
      link: "https://worldofwarcraft.com/fr-fr/character/eu/elune/nyvram"
    },
    {
      name: "eidor",
      realm: "elune",
      player: "3",
      link: "https://worldofwarcraft.com/fr-fr/character/eu/elune/eidor"
    },
    {
      name: "othior",
      realm: "elune",
      player: "3",
      link: "https://worldofwarcraft.com/fr-fr/character/eu/elune/othior"
    }
  ]

  const [datas, setDatas] = useState([])
  const [menu, setMenu] = useState(false)
  const [token, setToken] = useState('')

  useEffect(() => {


    const formData = new FormData();
    formData.append('grant_type', 'client_credentials');
    axios({
      auth: {
        username: "86ae002bc5a640c79807aad0a27d9d89",
        password: "5aZWOv3IIm34p4vWazqushBYqwQgV2iI"
      },
      method: 'post',
      url: 'https://eu.battle.net/oauth/token',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(function (res) {
        console.log(res);
        setToken(res.data.access_token)
      })
      .then(() => {
        getData()
      })
      .catch(function (err) {
        console.log(err);
      });


  }, [token])


  const getData = function () {
    if(token !== ''){
      players.map(item => {
        axios.get(`https://eu.api.blizzard.com/profile/wow/character/${item.realm}/${item.name}?namespace=profile-eu&locale=fr_FR&access_token=${token}`)
          .then(res => {
            axios.get(`https://eu.api.blizzard.com/profile/wow/character/${item.realm}/${item.name}/character-media?namespace=profile-eu&locale=fr_FR&access_token=${token}`)
              .then(media => {
                setDatas(old => [...old, {
                  id: res.data.id,
                  name: res.data.name,
                  realm: res.data.realm.name,
                  level: res.data.level,
                  realmslug: item.realm,
                  faction: res.data.faction.name,
                  gender: res.data.gender.name,
                  class: res.data.character_class.name,
                  race: res.data.race.name,
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
    }
  }


  return (
    <div className="App">
      <div className="background_top">
        <div className="background_top-overlay"></div>
      </div>
      <Router>
        <header className="header_app">
          <div className="header_container">
            <h1 className="header_title">Wow Project</h1>
            <nav className={menu ? 'header_nav active' : 'header_nav'}>
              <NavLink onClick={() => { setMenu(false) }} exact to="/">Accueil</NavLink>
              <NavLink onClick={() => { setMenu(false) }} exact to="/elvui">Elvui</NavLink>
              <NavLink onClick={() => { setMenu(false) }} exact to="/icy">Icy Veins</NavLink>
              <NavLink onClick={() => { setMenu(false) }} exact to="/raider">Raider Io</NavLink>
            </nav>
            <div onClick={() => { setMenu(true) }} className="header_menu_button"><i className="fas fa-bars"></i></div>
          </div>
        </header>
        <main className="main_app">
          <Route exact path="/" >
            <Home data={datas}></Home>
          </Route>
          <Route exact path="/elvui" component={Elvui}></Route>
          <Route exact path="/icy" component={Icy}></Route>
          <Route exact path="/raider" component={Raider}></Route>
        </main>
      </Router>
    </div>
  );
}

export default App;
