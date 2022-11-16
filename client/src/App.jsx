import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard.jsx';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
