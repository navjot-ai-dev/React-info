import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

const [user, setuser] = useState('user')

  const showalert = () =>{
   const abc = confirm('welcome! to our website I hope you like it.')
    
     console.log(
      abc
     );
     if (abc === true) {
      const promp = prompt('enter your name')
      console.log(promp);
      setuser(promp)
      
     }
     
     
     
      
    
  }

  return (
    <div>
         <section className="hero">
        <div className="hero-content">
          <h1>React JS</h1>
          <p>
            hello! {user}, <br />
            I hope you like it.<br />
            Build modern, fast and interactive user interfaces with React.
          </p>
          <button> <Link to="/code">learn more</Link></button>
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