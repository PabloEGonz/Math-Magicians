import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/quote';

function App() {
  return (
    <div className="body">
      <nav className="flex">
        <h1 className="nav-brand">Math Magicians</h1>
        <ul className="flex">
          <li><Link to="/" className="nav-item">Home</Link></li>
          <li><Link to="/calculator" className="nav-item">Calculator</Link></li>
          <li><Link to="/quote" className="nav-item">Quote</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
