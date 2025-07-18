// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Explore from './pages/Explore';
import CapitalMasteryAward from './pages/CapitalMasteryAward';
import { QuizProvider } from './context/QuizContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <QuizProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/capitalmasteryaward" element={<CapitalMasteryAward />} />
          </Routes>
        <Footer />
      </Router>
    </QuizProvider>
  );
}
