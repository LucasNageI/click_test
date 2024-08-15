import React from 'react'
import './TestSeconds.css'

export const TestSeconds = () => {
  return (
    <section className='test-seconds-section'>
        <ul>
            <li>
                <button>
                    <span>1 seconds</span>
                </button>
            </li>
            <li>
                <button>
                    <span>2 seconds</span>
                </button>
            </li>
            <li>   
                <button>
                    <span>5 seconds</span>
                </button>
            </li>
            <li>
                <button>
                    <span>10 seconds</span>
                </button>
            </li>
            <li>
                <button>
                    <span>15 seconds</span>
                </button>   
            </li>
            <li>
                <button>
                    <span>30 seconds</span>
                </button>
            </li>
            <li>
                <button>
                    <span>60 seconds</span>
                </button>
            </li>
            <li>
                <button>
                    <span>100 seconds</span>
                </button>
            </li>
        </ul>
    </section>
  )
}
