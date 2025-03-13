import React from "react";
import './NewGoal.css'

const NewGoal = () => {
    return (
        <form className="new-goal" onSubmit={e => e.preventDefault()}>
            <input type="text"/>
            <button type="submit" value="Add Goal">Add Goal</button>
        </form>
    )
}

export default NewGoal;