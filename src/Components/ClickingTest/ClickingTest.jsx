import React, { useState, useEffect, useRef } from 'react'
import './ClickingTest.css'

export const ClickingTest = ({ seconds }) => {
    const [is_counting, setChange] = useState(false)
    const [timesClicked, setClick] = useState(0)
    const [remaining_seconds, setRemainingSeconds] = useState(seconds)
    const intervalRef = useRef(null) // Usamos useRef para almacenar la referencia del intervalo
    const [totalClicks, setTotalClicks] = useState(0)

    useEffect(() => {
        return () => clearInterval(intervalRef.current) // Limpiar el intervalo cuando el componente se desmonta
    }, [])

    const handleClickTest = () => {
        if (!is_counting) {
            // Si no está contando, inicia el conteo
            setChange(true)
            setTotalClicks(0)
            setClick(1) // Cuenta el primer click
            setRemainingSeconds(seconds) // Reinicia los segundos restantes

            intervalRef.current = setInterval(() => {
                setRemainingSeconds((prevRemainingSeconds) => {
                    if (prevRemainingSeconds <= 1) {
                        clearInterval(intervalRef.current) // Detener el intervalo cuando llega a 0
                        setChange(false) // Detener el estado de counting
                        setTotalClicks(timesClicked) // Guarda el total de clics
                        return 0
                    }
                    return prevRemainingSeconds - 1
                })
            }, 1000)
        } else {
            // Si ya está contando, solo incrementa el contador de clicks
            setClick((prevClicks) => prevClicks + 1)
        }
    }

    useEffect(() => {
        // Cada vez que timesClicked cambia, se actualiza el total
        if (!is_counting && remaining_seconds === 0) {
            setTotalClicks(timesClicked)
        }
    }, [timesClicked, is_counting, remaining_seconds])

    return (
        <section className='main-page'>
            <div className='click-test-container'>
                <button onClick={handleClickTest} className='click-test'>
                    <span className={`click-to-start ${is_counting}`}>
                        {is_counting ? 'Counting...' : 'Click here to start counting'}
                    </span>
                </button>
            </div>

            <div className='spans-container'>
                <span className='times-clicked'>{timesClicked} clicks</span>
                <span className='seconds'>{is_counting ? remaining_seconds : seconds} s</span>
                <span className='total-clicks'>Total: {totalClicks}</span>
            </div>
        </section>
    )
}
