import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { ClickingTest, TypingTest, SpacingTest } from '../index.js'

export const Header = () => {
  return (
    
    <header className='header'>
        <span className='title'>T   e   s   t   e   r</span>
        <nav className='header-nav'>
            <a className='header-links' href="">C   l   i   c   k   i   n   g      T   e   s   t</a>
            <a className='header-links' href="">T   y   p   i   n   g      T   e   s   t</a>
            <a className='header-links' href=""> S   p   a   c   i   n   g      T   e   s   t</a>
        </nav>
    </header>
  )
}