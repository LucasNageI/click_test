import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { ClickingTest, TypingTest, SpacingTest } from '../index.js'

export const Header = () => {
  return (
    
    <header className='header'>
        <span className='title'>Tester</span>
        <nav className='header-nav'>
            <a className='header-links' href="">Clicking Test</a>
            <a className='header-links' href="">Typing Test</a>
            <a className='header-links' href="">Spacing Test</a>
        </nav>
    </header>
  )
}