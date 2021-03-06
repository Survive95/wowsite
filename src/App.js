import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Elvui from './components/Elvui';
import Icy from './components/Icy';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Raider from './components/Raider';
import Todoo from './components/Todoo';
import logo from './assets/logo.png'

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
      realm: "elune",
      player: "2",
      link: "https://worldofwarcraft.com/fr-fr/character/eu/elune/kiiru%C3%A4"
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
    },
    {
      name: "lognard",
      realm: "elune",
      player: "1",
      link: "https://worldofwarcraft.com/fr-fr/character/eu/elune/lognard"
    },
    {
      name: "sânkas",
      realm: "elune",
      player: "2",
      link: "https://worldofwarcraft.com/fr-fr/character/eu/elune/sânkas"
    },
  ]

  const [datas, setDatas] = useState([])
  const [menu, setMenu] = useState(false)
  const [token, setToken] = useState('')
  const [header, setHeader] = useState(false)

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
            console.log(res);
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
                  wowlink: item.link,
                  ilvl : res.data.equipped_item_level
                }])
              })
          })
      })
    }
  }


  // document.addEventListener('scroll', e => {
  //   console.log(window.scrollY);
  //   if(window.scrollY === 0){
  //     setHeader(false)
  //   }
  //   else{
  //     setHeader(true)
  //   }
  // })


  return (
    <div className="App">
      <div className="background_top">
        <div className="background_top-overlay"></div>
      </div>
      <Router>
        <header className={header ? 'header_app active' : 'header_app'}>
          <div className="header_container">
            <Link className="header_title_link" to="/"><h1 className="header_title"><img src={logo}></img>WoW Project</h1></Link>
            <nav className={menu ? 'header_nav active' : 'header_nav'}>
              <NavLink onClick={() => { setMenu(false) }} exact to="/">Accueil</NavLink>
              <NavLink onClick={() => { setMenu(false) }} exact to="/elvui">Elvui</NavLink>
              <NavLink onClick={() => { setMenu(false) }} exact to="/icy">Icy Veins</NavLink>
              <a className="wow" target="_blank" href="https://eu.battle.net/login/fr/?ref=https://eu.battle.net/oauth/authorize?response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fworldofwarcraft.com%252Fauth%26scope%3Dwow.profile%2520email%2520primary-address%2520private_flags%2520name%2520account.basic%2520account.standard%2520account.standard%253Amodify%2520account.full%2520commerce.profile.basic%2520commerce.entitlements%26state%3DobllxLeu-hyOWxQuhABuzhoaeAtMXL-UBdB8%26client_id%3De674efa0abaa423cb7805d3c41838416&app=oauth">World Of Warcraft</a>
              {/* <NavLink onClick={() => { setMenu(false) }} exact to="/raider">Raider Io</NavLink> */}
              {/* <NavLink onClick={() => { setMenu(false) }} exact to="/todoo">Liens utile</NavLink> */}
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
          {/* <Route exact path="/raider" component={Raider}></Route> */}
          {/* <Route exact path="/todoo" component={Todoo}></Route> */}
        </main>
      </Router>
    </div>
  );
}

export default App;
