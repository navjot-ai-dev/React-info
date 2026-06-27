import React from 'react'

const About = () => {
  return (
    <div>
       <section className="card">
        <h2>What is React?</h2>
        <p>
          React is a JavaScript library used for building user interfaces,
          especially single-page applications. It helps developers create
          reusable UI components.
        </p>
      </section>

         <section className="card">
        <h2>Who Developed React?</h2>
        <p>
          React was developed by <strong>Jordan Walke</strong>, a software
          engineer at Meta (formerly Facebook).
        </p>
      </section>

      {/* History */}
      <section className="card">
        <h2>When Was React Developed?</h2>
        <p>
          React was first created in 2011 and officially released as an
          open-source library in 2013 by Meta.
        </p>
      </section>

      {/* Why React */}
      <section className="card">
        <h2>Why Was React Developed?</h2>
        <p>
          React was created to solve the problem of building complex and dynamic
          user interfaces efficiently. It makes updating the UI faster using the
          Virtual DOM.
        </p>
      </section>

    </div>
  )
}

export default About