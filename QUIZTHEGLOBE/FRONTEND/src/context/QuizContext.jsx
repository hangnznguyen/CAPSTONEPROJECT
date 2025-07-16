import React, { createContext, useContext, useState } from 'react';

const QuizContext = createContext();

export function QuizProvider({ children }) {
  // User name (optional, if you use it in quiz)
  const [userName, setUserName] = useState('');

  // Quiz settings: numQuestions, question types, difficulties
  const [settings, setSettings] = useState({
    numQuestions: 10, // default number of questions
    types: {
      multiple: true,
      fill: true,
      trueFalse: true,
    },
    difficulties: {
      easy: true,
      medium: true,
      hard: true,
    },
  });

  // Quiz questions array
  const [questions, setQuestions] = useState([]);

  // Current question index
  const [currentIndex, setCurrentIndex] = useState(0);

  // User's current score
  const [score, setScore] = useState(0);

  // User's current streak of correct answers
  const [streak, setStreak] = useState(0);

  // Whether quiz has started or not
  const [quizStarted, setQuizStarted] = useState(false);

  // Context value object
  const value = {
    userName,
    setUserName,
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
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

// Custom hook to use QuizContext in components
export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}
