import About from './components/about'
import Notfound from './pages/notfound';

function App() {

  const showalert = ()=>{
    alert("welocome our first webpage I hope you like this UI")
  }

  return (


 

    <div className="app">


    <Notfound />
    <About />
    
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