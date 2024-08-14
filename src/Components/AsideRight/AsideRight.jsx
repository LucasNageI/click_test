import React from 'react'
import './AsideRight.css'

export const AsideRight = () => {
    return (
        <aside className='aside-right'>
            <ul className='list-container-right'>
                <li>
                    <span className='sec-span'>sec</span>
                </li>
                <li className='seconds-icon'>
                    <button className='icon-btn'>
                        <span className='seconds-icon'>05</span>
                    </button>
                </li>
                <li className='seconds-icon'>
                    <button className='icon-btn'>
                        <span className='seconds-icon'>10</span>
                    </button>
                </li>
                <li className='seconds-icon'>
                    <button className='icon-btn'>
                        <span className='seconds-icon'>30</span>
                    </button>
                </li>
            </ul>
        </aside>
    )
}
