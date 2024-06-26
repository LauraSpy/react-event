
import React from 'react';
import Counter from '../CounterComponent/Counter';
import './Activity.css';

function ActivityComponent({ activityName, count, onCountChange }) {
  return (
    <div className="activity">
      <h2>{activityName}</h2>
      {/* ajout de deux props : onCount et onCountChange pour le changement du compteur lorsque l'activité est aussi changée */}
      <Counter count={count} onCountChange={onCountChange} />
    </div>
  );
}

export default ActivityComponent;