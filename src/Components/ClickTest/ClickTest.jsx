import React, { useState } from 'react'
import './ClickTest.css'

export const ClickTest = () => {
    const [is_counting, setChange] = useState(false)
    const [seconds, setSeconds] = useState(0)

    const [timesClicked, setClick] = useState(0)

    const handleClickTest = () => {
        setChange(!is_counting)
        setClick((prevClicks) => prevClicks + 1)
    }

    return (
        <section className='main-page'>
            <div className='click-test-container'>
                <button onClick={handleClickTest} className='click-test'>
                    <span className={`click-to-start ${is_counting}`}>
                        click here to start counting
                    </span>
                </button>
            </div>

            <div className='spans-container'>
                <span className='times-clicked'>{timesClicked}</span>
                <span className='seconds'>{seconds}</span>
            </div>
        </section>
    )
}
