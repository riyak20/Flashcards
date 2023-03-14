import React, { useState } from "react";
import "./App.css";

function App() {
  const cards = [{ id: 1, question: 'What is the general price of USD/Yen?', answer: '136', }, { id: 2, question: 'What is the general price of Euro/USD?', answer: '1.06', }, { id: 3, question: 'What is the general price of STG/USD?', answer: '1.20', }, { id: 4, question: 'What is the general price of Nikkei?', answer: '27000', }, { id: 5, question: 'What is the general price of DAX?', answer: '15000', }, { id: 6, question: 'What is the general price of FTSE?', answer: '8000', }, { id: 7, question: 'What is the general price of DOW?', answer: '33000', }, { id: 8, question: 'What is the general price of S&P?', answer: '4000', }, { id: 9, question: 'What is the Japan 10 yr?', answer: '0.51%', }, { id: 10, question: 'What is the German 10 yr?', answer: '2.75%', },];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleNextCard = () => {
    const nextIndex = currentCardIndex + 1;
    if (nextIndex < cards.length) {
      setCurrentCardIndex(nextIndex);
      setShowAnswer(false);
      setUserAnswer('');
      setShowResult(false); // clear the result box
    }
  };

  const handlePreviousCard = () => {
    const previousIndex = currentCardIndex - 1;
    if (previousIndex >= 0) {
      setCurrentCardIndex(previousIndex);
      setShowAnswer(false);
      setShowResult(false);
    }
  };

  const handleCardClick = () => {
    setShowAnswer(!showAnswer);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentCard = cards[currentCardIndex];
    if (userAnswer === currentCard.answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setShowResult(true);
  };

  const currentCard = cards[currentCardIndex];

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
        <form onSubmit={handleSubmit}>
          <input type="text" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
        {showResult && (
          <div className="result" style={{ backgroundColor: isCorrect ? "green" : "red" }}>
            {isCorrect ? "Correct!" : "Incorrect."}
          </div>
        )}
      </div>
      <div className="button-container">
        <button className="previous-button" onClick={handlePreviousCard}>
          Back
        </button>
        <button className="next-button" onClick={handleNextCard}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
