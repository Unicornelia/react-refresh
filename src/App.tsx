import React from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import { Goal, Goals } from './types';
import NewGoal from './components/NewGoal/NewGoal';

function App() {
  const courseGoals: Goals = [
    { id: 1, text: 'Finish Course' },
    { id: 2, text: 'Learn main topics' },
    { id: 3, text: 'Refresh knowledge' }
  ];

  const addNewGoalHandler = (goal: Goal) => {
    courseGoals.push(goal);
    console.log(courseGoals);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Yo</h1>
        <h2>Course goals:</h2>
        <NewGoal onAddGoal={addNewGoalHandler} />
        <GoalList goals={courseGoals} />
      </header>
    </div>
  );
}

export default App;
