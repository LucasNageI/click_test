import React, { useState } from 'react'
import './App.css'
import { Header, SpacingTest, TypingTest, ClickingTest, TestSeconds } from './Components/index.js'

function App() {

    const [selectedSeconds, setSelectedSeconds] = useState(0)

    return (
        <>
            <Header />
            <main className='main-container'>
                <ClickingTest seconds={selectedSeconds} />
                <TestSeconds setSelectedSeconds={setSelectedSeconds} />
            </main>
        </>
    )
}

export default App
