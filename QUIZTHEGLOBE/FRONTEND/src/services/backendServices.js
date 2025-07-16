import { get, post } from './api';

// Fetch quiz questions with user-defined settings
export async function fetchQuizQuestions(settings) {
  const { numQuestions, difficulty, types } = settings;
  const typesStr = Object.keys(types).filter(t => types[t]).join(',');
  
  const query = `?amount=${numQuestions}&difficulty=${difficulty}&types=${typesStr}`;
  return await get(`/quiz${query}`);
}

// Submit the quiz result to backend (if saving high scores)
export async function submitQuizResult({ username, score, total }) {
  return await post('/results', { username, score, total, date: new Date().toISOString() });
}

// Optionally: Fetch top scores or stats
export async function fetchLeaderboard() {
  return await get('/results/top');
}