import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home.jsx';
import TableLearning from './components/TableLearning.jsx';
import QuizGame from './components/QuizGame.jsx';
import About from './components/About.jsx';

const App = () => (
  <Router>
    <div className="app-container">
      <header>
        <h1>Interactive Math Learning for Autism</h1>
        <nav>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active-link nav-item' : 'nav-item'}>Home</NavLink>
          <NavLink to="/teach" className={({ isActive }) => isActive ? 'active-link nav-item' : 'nav-item'}>Learn Tables</NavLink>
          <NavLink to="/quiz" className={({ isActive }) => isActive ? 'active-link nav-item' : 'nav-item'}>Quiz Game</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link nav-item' : 'nav-item'}>About</NavLink>
        </nav>
      </header>
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teach" element={<TableLearning />} />
          <Route path="/quiz" element={<QuizGame />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;
