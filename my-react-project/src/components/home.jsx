import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {



  return (
    <div>
         <section className="hero">
        <div className="hero-content">
          <h1>React JS</h1>
          <p>
            
            I hope you like it.<br />
            Build modern, fast and interactive user interfaces with React.
          </p>
          <button> <Link to="/learnmore">learn more</Link></button>
        </div>

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          className="react-logo"
        />
      </section>
    </div>
  )
}

export default Home