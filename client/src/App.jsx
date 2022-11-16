import Dashboard from './Dashboard.jsx';
import Navbar from './components/Navbar';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
