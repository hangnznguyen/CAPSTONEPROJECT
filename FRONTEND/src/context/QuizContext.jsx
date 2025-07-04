import React, { createContext, useContext, useState } from 'react';

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [settings, setSettings] = useState({
    numQuestions: 10,
    difficulty: 'Medium',
    types: { multiple: true, trueFalse: true, fill: false, matching: false, image: false }
  });
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  return (
    <QuizContext.Provider
      value={{
        settings, setSettings,
        questions, setQuestions,
        currentIndex, setCurrentIndex,
        score, setScore,
        streak, setStreak,
        quizStarted, setQuizStarted
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  return useContext(QuizContext);
}