// Import css file for the App.jsx
import './style.module.css';
// import React with useState, used in the const Activity
import React, { useState } from 'react';
// import for the ActivityComponent function in the component file, in which the Counter function is called
import ActivityComponent from './components/ActivityComponent/Activity.jsx';

function App() {
  //list the different activities in a const variable (will trigger the change in the setSelectedActivity)
  const activities = [
    'Match',
    'Festival',
    'Vote',
    'Proposition',
    'Réclamation'
  ];


  const [selectedActivity, setSelectedActivity] = useState(activities[0]);
  
  // stocker les compteurs de chaque activité
  const [counters, setCounters] = useState(
    activities.reduce((acc, activity) => ({ ...acc, [activity]: 0 }), {})
  );

  // modifie l'activité lorsque la liste déroulante est utilisée
  const handleActivityChange = (event) => {
    setSelectedActivity(event.target.value);
  };

  // met à jour le compteur d'une activité spécifique
  const updateCounter = (activity, newValue) => {
    setCounters(prevCounters => ({
      ...prevCounters,
      [activity]: newValue
    }));
  };

  return (
    <div>
      <div>
        <label htmlFor="activity-select">Activité : </label>
        <select id="activity-select" value={selectedActivity} onChange={handleActivityChange}>
          {activities.map((activity, index) => (
            <option key={index} value={activity}>
              {activity}
            </option>
          ))}
        </select>
      </div>
      <ActivityComponent 
        activityName={selectedActivity} 
        count={counters[selectedActivity]}
        onCountChange={(newValue) => updateCounter(selectedActivity, newValue)}
      />
    </div>
  );
}

export default App;