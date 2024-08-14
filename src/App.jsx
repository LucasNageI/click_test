import React from 'react'
import './App.css'
import { Header, AsideLeft, AsideRight, ClickTest } from './Components/index.js'

function App() {


    return (
        <>
            <Header />
            <main className='main-container'>
                <AsideLeft />
                <ClickTest />
                <AsideRight />
            </main>
        </>
    )
}

export default App
