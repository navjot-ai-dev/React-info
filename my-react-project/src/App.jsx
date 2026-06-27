import { Route, Routes } from 'react-router-dom';
import About from './components/about'
import Notfound from './pages/notfound';
import Home from './components/home';
import Feature from './components/feature';
import Code from './components/code';

function App() {

 
  return (

    <div className="app">

      <Routes>
        <Route path='*' element={<Notfound />} />
         <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/feature' element={<Feature />} />
        <Route path='/' element={<Code />} />

       </Routes> 
      

      <footer>
        <h3>Made With React ❤️</h3>
      </footer>
    </div>
  );
}

export default App;