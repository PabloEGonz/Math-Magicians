import './App.css';
import {
  createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Link, Outlet,
} from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/quote';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Route>,
    ),
  );
  return (
    <div className="body">
      <RouterProvider router={router} />
    </div>
  );
}
const Root = () => (
  <>
    <nav className="flex">
      <h1 className="nav-brand">Math Magicians</h1>
      <ul className="flex">
        <li><Link to="/" className="nav-item">Home</Link></li>
        <li><Link to="/calculator" className="nav-item">Calculator</Link></li>
        <li><Link to="/quote" className="nav-item">Quote</Link></li>
      </ul>
    </nav>
    <div>
      <Outlet />
    </div>
  </>
);

export default App;
