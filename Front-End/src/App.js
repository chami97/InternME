import React from 'react';
import './App.css';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
        <Routes>
           <Route exact path='/' element={<Home/>}/>
           <Route exact path='/dashboard' element={<Dashboard/>}/>
           <Route exact path='/login' element={<Login/>}/>
           <Route exact path='/register' element={<Register/>}/>
        </Routes>
      </Router>
  );
}

export default App;
