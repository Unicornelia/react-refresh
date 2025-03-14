import React from 'react';
import './NewGoal.css';

type onAddGoalType = { onAddGoal: (newGoal: { id: number; text: string }) => void };

const NewGoal = ({ onAddGoal }: onAddGoalType) => {
  const addGoalHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newGoal = {
      id: Math.random(),
      text: 'New Goal'
    };
    onAddGoal(newGoal);
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" />
      <button type="submit" value="Add Goal">Add Goal</button>
    </form>
  );
};

export default NewGoal;