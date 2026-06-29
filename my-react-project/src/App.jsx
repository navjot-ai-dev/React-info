import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import About from './components/about';
import Notfound from './pages/notfound';
import Home from './components/home';
import Feature from './components/feature';
import Code from './components/code';
import Navbar from './components/navbar';
import Learn from './components/learn';



function App() {

 const [user, setUser] = useState('user');

  const showAlert = () => {
    const confirmed = confirm('Welcome to our website! Can you want to sign in with only enter your name .');
    if (confirmed) {
      const userName = prompt('Enter your name');

       const capitalized = userName
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
           setUser(capitalized);
           alert("😊 Thank you! for your sign in.😊")
    }
  };

  useEffect(() => {
    showAlert();
  }, []);


  return (
    <div className="app">
      <Navbar user={user} />
      
     <div className='mt-10'>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/learnmore' element={<Learn />} />
        <Route path='/feature' element={<Feature />} />
        <Route path='/code' element={<Code />} />
        {/* Keeps the catch-all wildcard at the bottom */}
        <Route path='*' element={<Notfound />} />
      </Routes> 

     </div>

      <footer>
        <h3>Made With React ❤️</h3>
      </footer>
    </div>
  );
}

export default App;