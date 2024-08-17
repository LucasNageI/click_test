import React from 'react'
import './TestSeconds.css'

export const TestSeconds = ({ setSelectedSeconds }) => {
    const handleSelectSeconds = (seconds) => {
        setSelectedSeconds(seconds)
    }

    return (
        <section className='test-seconds-section'>
            <ul className='test-seconds-list'>
                <li>
                    <button onClick={() => handleSelectSeconds(1)} className='test-seconds-list-item'>
                        <span className='test-seconds-list-item-span'>1 second</span>
                    </button>
                </li>
                <li>
                    <button onClick={() => handleSelectSeconds(2)} className='test-seconds-list-item'>
                        <span className='test-seconds-list-item-span'>2 seconds</span>
                    </button>
                </li>
                <li>
                    <button onClick={() => handleSelectSeconds(5)} className='test-seconds-list-item'>
                        <span className='test-seconds-list-item-span'>5 seconds</span>
                    </button>
                </li>
                <li>
                    <button onClick={() => handleSelectSeconds(10)} className='test-seconds-list-item'>
                        <span className='test-seconds-list-item-span'>10 seconds</span>
                    </button>
                </li>
                <li>
                    <button onClick={() => handleSelectSeconds(15)} className='test-seconds-list-item'>
                        <span className='test-seconds-list-item-span'>15 seconds</span>
                    </button>
                </li>
                <li>
                    <button onClick={() => handleSelectSeconds(30)} className='test-seconds-list-item'>
                        <span className='test-seconds-list-item-span'>30 seconds</span>
                    </button>
                </li>
                <li>
                    <button onClick={() => handleSelectSeconds(60)} className='test-seconds-list-item'>
                        <span className='test-seconds-list-item-span'>60 seconds</span>
                    </button>
                </li>
                <li>
                    <button onClick={() => handleSelectSeconds(100)} className='test-seconds-list-item'>
                        <span className='test-seconds-list-item-span'>100 seconds</span>
                    </button>
                </li>
            </ul>
        </section>
    )
}
