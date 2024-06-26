import React from 'react';
import './Counter.css';

// props count pour le nombre du compteur qui sera afficher après chaque "event" et onCountChange sera utilisé pour changer ce compteur lorsque l'activité sélectionnée change
function Counter({ count, onCountChange }) {
  const increment = () => {
    onCountChange(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      onCountChange(count - 1);
    }
  };

  const reset = () => {
    onCountChange(0);
  };

  return (
    <div>
      <p>{count}</p>
      <div className='buttons'>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>~</button>
      </div>
    </div>
  );
}

export default Counter;