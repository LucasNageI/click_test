import React from 'react'
import './App.css'
import { Header, SpacingTest, TypingTest, ClickingTest, TestSeconds } from './Components/index.js'

function App() {


    return (
        <>
            <Header />
            <main className='main-container'>
                <ClickingTest />
                <TestSeconds />
            </main>
        </>
    )
}

export default App
