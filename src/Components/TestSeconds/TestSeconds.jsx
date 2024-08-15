import React from 'react'
import './TestSeconds.css'

export const TestSeconds = () => {
  return (
    <section className='test-seconds-section'>
        <ul className='test-seconds-list'>
            <li>
                <button className='test-seconds-list-item'>
                    <span className='test-seconds-list-item-span'>1 seconds</span>
                </button>
            </li>
            <li>
                <button className='test-seconds-list-item'>
                    <span className='test-seconds-list-item-span'>2 seconds</span>
                </button>
            </li>
            <li>   
                <button className='test-seconds-list-item'>   
                    <span className='test-seconds-list-item-span'>5 seconds</span>
                </button>
            </li>
            <li>
                <button className='test-seconds-list-item'>
                    <span className='test-seconds-list-item-span'>10 seconds</span>
                </button>
            </li>
            <li>
                <button className='test-seconds-list-item'>
                    <span className='test-seconds-list-item-span'>15 seconds</span>
                </button>   
            </li>   
            <li>
                <button className='test-seconds-list-item'>
                    <span className='test-seconds-list-item-span'>30 seconds</span>
                </button>
            </li>
            <li>
                <button className='test-seconds-list-item'>
                    <span className='test-seconds-list-item-span'>60 seconds</span>
                </button>
            </li>
            <li>
                <button className='test-seconds-list-item'>
                    <span className='test-seconds-list-item-span'>100 seconds</span>
                </button>
            </li>
        </ul>
    </section>
  )
}
