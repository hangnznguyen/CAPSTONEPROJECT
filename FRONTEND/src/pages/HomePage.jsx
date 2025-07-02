import React from 'react';

export default function HomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.headline}>How Well Do You Know the Capitals of the World? Take the Quiz and Find Out!</h1>
      <p style={styles.subheadline}>
        Test your knowledge with fun quizzes designed for learners of all ages. Explore countries, learn cool facts, and challenge yourself or your friends!
      </p>

      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => window.location.href = '/quiz'}>
          Start the Quiz!
        </button>
        <button style={styles.button} onClick={() => window.location.href = '/learn'}>
          Learn About Countries First
        </button>
        <button style={styles.button} onClick={() => window.location.href = '/leaderboard'}>
          See the Top Players
        </button>
      </div>

      <section style={styles.section}>
        <h2>Why Play QuizTheGlobe?</h2>
        <ul style={styles.list}>
          <li>🧠 Boost your geography skills while having fun!</li>
          <li>🎯 Choose how many questions you want: 5, 10, or 20.</li>
          <li>⚡ Pick your difficulty level: Easy, Medium, or Hard.</li>
          <li>🏆 Compete for the leaderboard and earn your place as a top scorer!</li>
          <li>🎉 Get a special certificate if you score perfectly!</li>
          <li>📚 Not ready for the quiz? Use the learning section to discover interesting country facts before playing.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Fun Messages to Motivate</h2>
        <ul style={styles.list}>
          <li>“Travel the world with your mind!”</li>
          <li>“Can you name the capitals? Give it a try!”</li>
          <li>“Learn, play, and share your score with friends and classmates!”</li>
        </ul>
      </section>

      <footer style={styles.footer}>
        New here? Start with the <strong>Learn About Countries</strong> button to get ready.<br />
        Don’t forget to <strong>share your score</strong> and challenge your friends!
      </footer>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '700px',
    margin: '40px auto',
    padding: '0 20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#222',
    textAlign: 'center',
  },
  headline: {
    fontSize: '2.5rem',
    marginBottom: '15px',
    color: '#007acc',
  },
  subheadline: {
    fontSize: '1.2rem',
    marginBottom: '30px',
  },
  buttonGroup: {
    marginBottom: '40px',
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#007acc',
    color: '#fff',
    border: 'none',
    padding: '12px 25px',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  section: {
    marginBottom: '30px',
    textAlign: 'left',
  },
  list: {
    listStyle: 'none',
    paddingLeft: 0,
    fontSize: '1.1rem',
    lineHeight: '1.6',
  },
  footer: {
    fontSize: '1rem',
    color: '#555',
    marginTop: '50px',
  },
};