import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;

const QuizGame = () => {
  const [table, setTable] = useState(2);
  const [question, setQuestion] = useState({ a: 2, b: 1 });
  const [options, setOptions] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    generateNewQuestion(table);
  }, [table]);

  const generateNewQuestion = (num) => {
    const a = num;
    const b = getRandomInt(10);
    const correct = a * b;
    const opts = new Set([correct]);
    while (opts.size < 4) {
      opts.add(getRandomInt(100));
    }
    setQuestion({ a, b });
    setOptions([...opts].sort(() => Math.random() - 0.5));
    setFeedback(null);
  };

  const handleAnswer = (choice) => {
    if(choice === question.a * question.b) {
      setFeedback('correct');
      setScore(s => s + 1);
    } else {
      setFeedback('wrong');
      setScore(s => s > 0 ? s -1 : 0);
    }
    setTimeout(() => generateNewQuestion(table), 1200);
  };

  return (
    <div className="card quiz-game">
      <div>
        <label style={{fontSize: '1.2rem'}}>
          Choose Table:&nbsp;
          <input 
            type="number" 
            min="1" max="20" 
            value={table} 
            onChange={e => setTable(+e.target.value)} 
            aria-label="Choose multiplication table"
          />
        </label>
      </div>
      
      <div className="quiz-question" aria-live="polite">
        What is {question.a} × {question.b}?
      </div>

      <div className="answer-buttons">
        {options.map(opt => (
          <motion.button
            key={opt}
            className={`answer-btn ${feedback === 'correct' && opt === question.a * question.b ? 'correct' : ''} ${feedback === 'wrong' && opt !== question.a * question.b && feedback !== null ? 'wrong' : ''}`}
            onClick={() => handleAnswer(opt)}
            disabled={feedback !== null}
            whileTap={{ scale: 0.95 }}
          >
            {opt}
          </motion.button>
        ))}
      </div>

      <div className="score-badge" aria-live="polite" aria-atomic="true">
        Score: {score}
      </div>
    </div>
  );
};

export default QuizGame;
