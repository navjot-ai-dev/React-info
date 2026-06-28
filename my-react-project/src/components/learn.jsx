import React from 'react'

const Learn = () => {
  return (
    
       <div>
       <section className="card">
        <h2>Basic React Code</h2>

        <pre>
{`function App() {
  return (
    <h1>Hello user! by react</h1>
  );
}

export default App;

// HelloWorld.jsx
import React from 'react';

function HelloWorld() {
  return (
    <div className="container">
      <h1>Hello, World!</h1>
      <p>Welcome to my first React component.</p>
    </div>
  );
}

export default HelloWorld;


// UserCard.jsx (Child Component)
function UserCard(props) {
  return (
    <div className="user-card" style={{ border: '1px solid #ccc', padding: '10px' }}>
      <h2>Name: {props.name}</h2>
      <p>Role: {props.role}</p>
    </div>
  );
}

// App.jsx (Parent Component passing the data)
import UserCard from './UserCard';

function App() {
  return (
    <div>
      <h1>Our Team</h1>
      {/* Reusing the same component with different data */}
      <UserCard name="Alice" role="Frontend Engineer" />
      <UserCard name="Bob" role="UI Designer" />
    </div>
  );
}

export default App;


// GreetingForm.jsx
import React, { useState } from 'react';

function GreetingForm() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value); // Tracks typing
  };

  return (
    <div style={{ padding: '20px' }}>
      <label htmlFor="name-input">Enter your name: </label>
      <input 
        id="name-input"
        type="text" 
        value={name} 
        onChange={handleChange} 
        placeholder="Type here..."
      />
      {/* Conditionally showing text only if name is typed */}
      {name && <h3>Nice to meet you, {name}!</h3>}
    </div>
  );
}

export default GreetingForm;
`}


        </pre>
      </section>
    </div>
  
  )
}

export default Learn
