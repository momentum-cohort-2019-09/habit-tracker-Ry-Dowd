import React from 'react'
import ReactDOM from 'react-dom'
import Comments from './Comments'

const Habit = ({habit}) => {
  const endpoint = "/api/habits/"+habit.id
  const className = 'comments'+habit.id
  
  function showComments(){
    ReactDOM.render(<Comments endpoint={endpoint} />, document.querySelector("."+className))
  } 
  return (
    <div className='habit'>
      {habit.activity}
      <div className="habit-content">
        My goal is {habit.goal} {habit.goal_measurement} per day.
        <div className="button-holder">
          <div className="button">Detailed History</div>
          <div className='button' onClick={showComments}>Comments</div>
        </div>
        <div className={className}></div>
      </div>
    </div>
  )}

export default Habit