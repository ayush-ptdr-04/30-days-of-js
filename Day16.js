// guess random number

import React, { useEffect, useState } from "react";
import "./styles.css";

function GuessTheNumber() {
  const [randomNum, setRandomNum] = useState(null);
  const [guessValue, setGuessValue] = useState(null);
  const [feedMessage, setFeedMessage] = useState("");
  const [count, setCount] = useState(0);
  const [resetTrigger, setResetTrigger] = useState(0);

  useEffect(() => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNum(number);
  }, [resetTrigger]);

  // Function to handle guess checking
  const handleGuess = () => {
    const updatedCount = count + 1;

    setCount(updatedCount);

    if (guessValue >= 1 && guessValue <= 100) {
      if (randomNum == guessValue) {
        setFeedMessage(
          `Congratulations! You guessed the number in ${updatedCount} attempts.`
        );
      } else if (randomNum > guessValue) {
        setFeedMessage("Too low! Try again.");
      } else {
        setFeedMessage("Too high! Try again.");
      }
    } else {
      return setFeedMessage("Please enter a number between 1 and 100.");
    }
  };

  // Function to reset the game
  const resetGame = () => {
    setGuessValue("");
    setFeedMessage("");
    setCount(0);
    setResetTrigger(resetTrigger + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "50px 0",
      }}>
      <h2>Guess the Number</h2>
      <input
        type="number"
        value={guessValue}
        onChange={(e) => setGuessValue(e.target.value)}
        placeholder="Enter a number between 1 and 100"
        style={{ width: "300px", padding: "5px" }}
        id="guess-input"
      />
      <div>
        <button onClick={handleGuess} style={{ margin: "20px" }}>
          Check Guess
        </button>
        <button onClick={resetGame} style={{ margin: "20px" }}>
          Reset Game
        </button>
      </div>

      <p>{feedMessage}</p>
    </div>
  );
}

export default GuessTheNumber;
