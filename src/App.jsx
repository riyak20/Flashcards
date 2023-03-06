import React, { useState } from "react";
import "./App.css";

function App() {
  const cards = [
    {
      id: 1,
      question: 'What is the general price of USD/Yen?',
      answer: '136',
    },
    {
      id: 2,
      question: 'What is the general price of Euro/USD?',
      answer: '1.06',
    },
    {
      id: 3,
      question: 'What is the general price of STG/USD?',
      answer: '1.20',
    },
    {
      id: 4,
      question: 'What is the general price of Nikkei?',
      answer: '27000',
    },
    {
      id: 5,
      question: 'What is the general price of DAX?',
      answer: '15000',
    },
    {
      id: 6,
      question: 'What is the general price of FTSE?',
      answer: '8000',
    },
    {
      id: 7,
      question: 'What is the general price of DOW?',
      answer: '33000',
    },
    {
      id: 8,
      question: 'What is the general price of S&P?',
      answer: '4000',
    },
    {
      id: 9,
      question: 'What is the Japan 10 yr?',
      answer: '0.51%',
    },
    {
      id: 10,
      question: 'What is the German 10 yr?',
      answer: '2.75%',
    },
  ];

  const [currentCard, setCurrentCard] = useState(cards[0]);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNextCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const nextCard = cards[randomIndex];
    setCurrentCard(nextCard);
    setShowAnswer(false);
  };

  const handleCardClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="app">
      <h1 className="title">Markets Flashcard Prep</h1>
      <h2 className="subtitle"> Learn about the major finance indicators below! </h2>
      <h3 className="subtitle"> Number of flashcards: {cards.length} </h3>
      <div className="card-container">
        <div className="card" onClick={handleCardClick}>
          <div className="card-text">
            {showAnswer ? currentCard.answer : currentCard.question}
          </div>
        </div>
      </div>
      <button className="next-button" onClick={handleNextCard}>
        Next
      </button>
    </div>
  );
}

export default App;
