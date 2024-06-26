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

  // met à jour le compteur d'une activité spécifique, et garde en mémoire la nouvelle valeur du compteur
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
        {/* select permet de créer la liste déroulante pour les activités, fait appel à la variable activities plus haut */}
        <select id="activity-select" value={selectedActivity} onChange={handleActivityChange}>
          {/* .map permet de récupérer la liste des activités notées dans la variale */}
          {activities.map((activity, index) => (
            <option key={index} value={activity}>
              {activity}
            </option>
          ))}
        </select>
      </div>
      {/* appelle du composant activity.jsx qui permet d'avoir une structure de base et de faire le changement de compteur lié à l'activité */}
      <ActivityComponent 
        activityName={selectedActivity} 
        count={counters[selectedActivity]}
        onCountChange={(newValue) => updateCounter(selectedActivity, newValue)}
        // permet de changer le compteur avec le changement de l'activité, affecte une nouvelle valeur au compteur en fonction de l'activité sélectionner, 
        // la valeur sera garder en mémoire
      />
    </div>
  );
}

export default App;