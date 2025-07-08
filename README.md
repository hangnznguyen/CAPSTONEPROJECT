# CAPSTONEPROJECT readme file

#Quiz The Globe

## OVERVIEW:
Quiz The Globe is an interactive React-based quiz application designed to challenge users' knowledge of world capitals and geography through multiple question types and difficulty levels. It features a dynamic quiz experience with sound effects, timers, scoring, and a leaderboard with certificates for top players.

##Features

- Multiple question types: Multiple choice, fill-in-the-blank, and true/false.

- Customizable quiz settings: Choose question types, difficulties, and number of questions.

- Timer per question: Each question has a countdown timer with visual progress.

- Score tracking: Real-time score and streak tracking with sound effects.

- Certificate generation: Generate downloadable or printable certificates for top players.

- Leaderboard: View top 10 players with interactive certificate display.

- Responsive UI: Styled with Material UI and React Icons for a polished look.

- Sound effects: Feedback sounds for correct, incorrect answers, streaks, and quiz completion.

- Routing: Multi-page navigation using React Router (Home, Quiz, Explore, Leaderboard).

- Fallback questions: Offline fallback support if API fails.

## Getting started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
  
**Technologies

.React (with hooks and context)

.Material UI (MUI) for UI components and styling

.React Router DOM for page routing

.React Icons for iconography

.html2canvas and jsPDF for certificate generation

.Canvas Confetti for visual effects

.Sound API for audio feedback


**Installation

1. Clone the repository:
git clone https://github.com/hangnznguyen/CAPSTONEPROJECT.git
cd QUIZTHEGLOBE

2.Install dependencies:
npm install

3.Start the development server with vite
npm run dev

4.Access  the app at http://localhost:5173

**Usage

On the Home page, users are welcomed and can navigate to start the quiz.

On the Quiz page, users set their preferences and start the quiz.

Answer questions before the timer runs out. Scores and streaks update dynamically.

After completion, users can view their results and restart or exit the quiz.

The Explore page can provide additional geographical content or fun facts.

The Capital Mastery Award page shows a leaderboard of top players, with certificates and confetti animations.

***Project Structure

/src
  /components
    Certificate.jsx
    Navbar.jsx
    Footer.jsx
    QuizQuestion.jsx
    ScoreBoard.jsx
    SettingPanel.jsx
    SoundEffect.js
    Timer.jsx
  /context
    QuizContext.jsx
  /data
    fallbackQuestions.js
    fallbackCountries.js
  /pages
    Home.jsx
    Quiz.jsx
    Explore.jsx
    CapitalMasteryAward.jsx
  App.jsx
  
**Components Overview

Quiz.jsx
Handles quiz lifecycle: fetching questions, tracking current question, score, streaks.

Uses SettingPanel for quiz configuration.

Displays QuizQuestion component based on question type.

Integrates Timer, ScoreBoard, and sound effects.

QuizQuestion.jsx
Renders question prompts and answer input UI based on type (multiple choice, fill, true/false).

Handles user input and answer validation.

Timer.jsx
Countdown timer with linear progress bar and timeout callback.

ScoreBoard.jsx
Displays current score and streak count.

SettingPanel.jsx
Allows users to select question types and difficulty levels.

Certificate.jsx
Generates customizable certificates for players with download and print options.

CapitalMasteryAward.jsx
Fetches and displays top players.

Shows confetti effect and certificate popup on player selection.

SoundEffect.js
Manages audio playback for quiz feedback.
  
##API
The app fetches quiz questions from:

/api/quiz?amount=<number>&difficulty=<difficulty>&types=<comma_separated_types>
And posts player scores to:

/api/players
A fallback question set is used if the API fails.

***Future Improvements
Add user authentication for personalized experience.

Expand question database with more categories and multimedia.

Add real-time multiplayer quiz challenges.

Improve mobile responsiveness.

Enhance Explore page with interactive maps and learning tools.

##Data

The app uses fallback data for countries and quiz questions to ensure offline functionality and smoother user experience. The fallback country data includes information such as country name, capital, population, currency, region, and flag URL

##License

This project is licensed under the MIT License
  
