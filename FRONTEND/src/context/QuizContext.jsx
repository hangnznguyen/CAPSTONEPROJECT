import React, { createContext, useContext, useState } from 'react';

const QuizContext = createContext();

export function QuizProvider({ children }) {
  // Initial settings state
  const [settings, setSettings] = useState({
    numQuestions: 5,
    difficulty: 'Easy',
    types: {
      multiple: true,
      fill: true,
      trueFalse: true,
    },
  });

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  // Add userName state here
  const [userName, setUserName] = useState('');

  const value = {
    settings,
    setSettings,
    questions,
    setQuestions,
    currentIndex,
    setCurrentIndex,
    score,
    setScore,
    streak,
    setStreak,
    quizStarted,
    setQuizStarted,
    userName,        // expose userName
    setUserName,     // expose setUserName
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

// Custom hook for easier consumption
export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) throw new Error('useQuiz must be used within a QuizProvider');
  return context;
}
