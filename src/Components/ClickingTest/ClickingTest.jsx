import React, { useState, useEffect, useRef } from 'react'
import './ClickingTest.css'

export const ClickingTest = ({ seconds }) => {
    const [is_counting, setChange] = useState(false)
    const [timesClicked, setClick] = useState(0)
    const [remaining_seconds, setRemainingSeconds] = useState(seconds)
    const [totalClicks, setTotalClicks] = useState(0)
    const [isDisabled, setDisabled] = useState(false)
    const [cps, setCps] = useState(0)
    const intervalRef = useRef(null)

    useEffect(() => {
        return () => clearInterval(intervalRef.current)
    }, [])

    useEffect(() => {
        if (remaining_seconds === 0 && is_counting) {
            setChange(false)
            setTotalClicks(timesClicked)
            setDisabled(true)

            // Calcular CPS y mostrarlo
            if (seconds > 0) {
                setCps(totalClicks / seconds)
            }

            setTimeout(() => {
                setDisabled(false)
            }, 1000)
        }
    }, [remaining_seconds, is_counting, timesClicked, seconds, totalClicks])

    const handleClickTest = () => {
        if (!is_counting) {
            setChange(true)
            setClick(0)
            setRemainingSeconds(seconds)

            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }

            intervalRef.current = setInterval(() => {
                setRemainingSeconds((prevRemainingSeconds) => prevRemainingSeconds - 1)
            }, 1000)
        } else {
            setClick((prevClicks) => prevClicks + 1)
        }
    }

    return (
        <section className='main-page'>
            <div className='click-test-container'>
                <button 
                    onClick={handleClickTest} 
                    className={`click-test ${isDisabled ? 'click-to-start-disabled' : ''}`} 
                    disabled={isDisabled}
                >
                    <span className='click-to-start'>
                        {is_counting ? 'Counting...' : 'select seconds and click to start'}
                    </span>
                </button>
            </div>

            <div className='spans-container'>
                <span className='times-clicked'>{timesClicked} clicks</span>
                <span className='seconds'>{is_counting ? remaining_seconds : seconds} s</span>
                <span className='total-clicks'>Total: {totalClicks}</span>
                <span className='cps'>{cps.toFixed(2)} cps</span>
            </div>
        </section>
    )
}

