import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Sidebar />
      <Home />
    </>
  );
}

export default App;
