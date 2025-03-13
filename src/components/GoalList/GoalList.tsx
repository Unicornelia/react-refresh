import React from "react";
import './GoalList.css'
import {Goal, Goals} from "../../types";

const GoalList = ({goals}: {goals: Goals}) => {
    return (
        <ul className="goal-list">
            {goals.map((goal: Goal) => (
                <li key={goal.id}>{goal.text}</li>
            ))}
        </ul>
    )
}

export default GoalList;