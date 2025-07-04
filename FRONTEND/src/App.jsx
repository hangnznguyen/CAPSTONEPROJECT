// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuizProvider } from './context/QuizContext';

// Pages
import Home from './pages/Home';
import Explore from './pages/Explore';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

// Global Components
import Navbar from './components/Navbar';

export default function App() {
  return (
    <QuizProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </QuizProvider>
  );
}
