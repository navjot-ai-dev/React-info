import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-15 w-full flex justify-evenly items-center flex-row text-2xl text-white font-semibold fixed top-0'
    id='navbar'>
            <h1>My website</h1>
                <div className='flex gap-8'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/feature">Feature</Link>
                <Link to="/code">codes</Link>
        
                </div>
    </div>
  )
}

export default Navbar