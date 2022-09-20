import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Proyectos from './Proyectos';
import Cv from './Cv';

function App() {
  return (
    <div className="App">
      <h1>hola</h1>
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Proyectos">Proyectos</Link></li>
        <li><Link to="/Cv">Cv</Link></li>
      </nav>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/About" element={<About />} />
        <Route path="/Proyectos" element={<Proyectos />} />
        <Route path="/Cv" element={<Cv />} />
      </Routes>
    </div>
  );
}

export default App;
