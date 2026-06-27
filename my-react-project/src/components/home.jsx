import React from 'react'

const Home = () => {

  const showalert = () =>{
    alert('welcome! to our website I hope you like it.')
  }

  return (
    <div>
         <section className="hero">
        <div className="hero-content">
          <h1>React JS</h1>
          <p>
            Build modern, fast and interactive user interfaces with React.
          </p>
          <button onClick={showalert}>Click me!</button>
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