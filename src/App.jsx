import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [artists, setArtists] = useState([{name: "NBA Youngboy", musicType: "rap", description: "NBA Youngboy is a rapper", songs: ["Bandit", "Lonely Child", "No Smoke", "Untouchable", "Outside Today", "Slime Belief", "Genie", "Make No Sense", "House Arrest Tingz", "Kacey Talk", "Fine By Time", "All In", "AI Nash", "Cross Roads", "Bad Bad"], albums: ["AI Youngboy 2", "38 Baby 2", "Top", "Until Death Call My Name", "Realer", "Ain't Too Long", "Master The Day Of Judgement", "Decided", "Mind Of A Menace 3", "Mind Of A Menace 2", "Before"]},
  ])

  return (
   <div>
    <h1>Ope's favourite artists song/albums</h1>
   </div>
  )
}

export default App
