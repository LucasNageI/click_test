import React, { useState } from 'react'
import './App.css'

function App() {

    const [timesClicked, setClick] = useState(0)

    const handleClickTest = () => {
        setClick((prevClicks) => prevClicks + 1)
    }

  return (
    <main className='main-page'>
        <button onClick={handleClickTest} className='click-test'>click</button>
        <span className='times-clicked'>{timesClicked}</span>
    </main>
  )
}

export default App
