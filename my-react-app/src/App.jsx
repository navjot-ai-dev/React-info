

function App() {
  return (
    <div className="app">
    
      <section className="hero">
        <div className="hero-content">
          <h1>React JS</h1>
          <p>
            Build modern, fast and interactive user interfaces with React.
          </p>
          <button>Learn More</button>
        </div>

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          className="react-logo"
        />
      </section>

      {/* About React */}
      <section className="card">
        <h2>What is React?</h2>
        <p>
          React is a JavaScript library used for building user interfaces,
          especially single-page applications. It helps developers create
          reusable UI components.
        </p>
      </section>

      {/* Developed By */}
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

      {/* Features */}
      <section className="features">
        <h2>React Features</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>⚡ Virtual DOM</h3>
            <p>Improves performance by updating only changed elements.</p>
          </div>

          <div className="feature-card">
            <h3>🧩 Components</h3>
            <p>Create reusable UI elements and reduce code duplication.</p>
          </div>

          <div className="feature-card">
            <h3>🔄 State Management</h3>
            <p>Manage dynamic data and UI updates easily.</p>
          </div>

          <div className="feature-card">
            <h3>🚀 Fast Development</h3>
            <p>Build scalable applications quickly and efficiently.</p>
          </div>
        </div>
      </section>

      {/* Example Code */}
      <section className="card">
        <h2>Basic React Code</h2>

        <pre>
{`function App() {
  return (
    <h1>Hello user! by react</h1>
  );
}

export default App;`}
        </pre>
      </section>

      {/* Footer */}
      <footer>
        <h3>Made With React ❤️</h3>
      </footer>
    </div>
  );
}

export default App;