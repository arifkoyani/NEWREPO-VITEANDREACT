import { useState } from 'react'
import './App.css'
import StartGame from './assets/components/StartGame'
import Gamesplaying from './assets/components/Gameplaying';
function App() {
let [isgameplay,setgameplay]=useState(false);

function togglegame(){
  setgameplay((pre)=>!pre)
}

  return (
    <>
    {
      isgameplay?<StartGame toggle={togglegame}/>:<Gamesplaying/>
    }
    <container/>
    </>
  )
}

export default App



