import React, { useState } from 'react';
import GoalList from './components/GoalList/GoalList';
import { Goal, Goals } from './types';
import NewGoal from './components/NewGoal';
import styled from 'styled-components';

const StyledApp = styled.div`
    text-align: center;
`;

const Header = styled.header`
    display: flex;
    background-color: #282c34;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

function App() {
  const initialGoals: Goals = [
    { id: 1, text: 'Finish Course' },
    { id: 2, text: 'Learn main topics' },
    { id: 3, text: 'Refresh knowledge' }
  ];

  const [courseGoals, setCourseGoals] = useState(initialGoals);

  const addNewGoalHandler = (goal: Goal) => {
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(goal));
  };

  return (
    <StyledApp>
      <Header>
        <h1>Yo</h1>
        <h2>Course goals:</h2>
        <NewGoal onAddGoal={addNewGoalHandler} />
        <GoalList goals={courseGoals} />
      </Header>
    </StyledApp>
  );
}

export default App;
