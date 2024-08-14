import React from 'react'
import './AsideLeft.css'
import { BiSpaceBar } from "react-icons/bi";
import { CiDesktopMouse1 } from "react-icons/ci";
import { BsKeyboard } from "react-icons/bs";

export const AsideLeft = () => {
    return (
        <aside className='aside-left'>
            <ul className='list-container-left'>
                <li>
                    <span className='tests-span'>tests</span>
                </li>
                <li>
                    <button className='icon-btn'>
                        <CiDesktopMouse1 className='mouse-icon' />
                    </button>
                </li>
                <li>
                    <button className='icon-btn'>
                        <BiSpaceBar className='spacebar-icon' />
                    </button>
                </li>
                <li>
                    <button className='icon-btn'>
                        <BsKeyboard className='keyboard-icon' />
                    </button>
                </li>
            </ul>
        </aside>
    )
}
