import React, { useState } from "react";

const Dice = () => {
  const [history, setHistory] = useState([])

  const diceRoll = (max) => Math.floor( Math.random() * max) + 1
  const rollAndAddHistory = () => {
    const result = diceRoll(6)
    setHistory(history.concat(result))
    return result
  }

  return (
    <div>
      <div>This is todo_list Button</div>
      <button onClick={rollAndAddHistory}>diceRoll</button>
      <ul>
        {history.reverse().map((rollResult, index) => {
          return <li key={index}>{index + 1} 投目:{rollResult}</li>;
        })}
      </ul>
    </div>
  )
};

export default Dice;
