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
      <Route path="/math-magicians" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/math-magicians/calculator" element={<Calculator />} />
        <Route path="/math-magicians/quote" element={<Quote />} />
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
        <li><Link to="/math-magicians" className="nav-item">Home</Link></li>
        <li><Link to="/math-magicians/calculator" className="nav-item">Calculator</Link></li>
        <li><Link to="/math-magicians/quote" className="nav-item">Quote</Link></li>
      </ul>
    </nav>
    <div>
      <Outlet />
    </div>
  </>
);

export default App;
