import { Route, Routes } from 'react-router-dom';
import About from './components/about';
import Notfound from './pages/notfound';
import Home from './components/home';
import Feature from './components/feature';
import Code from './components/code';
import Navbar from './components/navbar';



function App() {
  return (
    <div className="app">
      <Navbar />
      
     <div className='mt-10'>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
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