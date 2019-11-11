import React from 'react'
import ReactDOM from 'react-dom'
import Comments from './Comments'
import Details from './Details'

const Habit = ({habit}) => {
  const endpoint = "/api/habits/"+habit.id
  const className = 'comments'+habit.id
  props
  
  function showDetails(){
    ReactDOM.render(<Details />, document.querySelector("."+className+"-details"))
  }
  
  function hideDetails(){
    ReactDOM.render('', document.querySelector("."+className+"-details"))
  }
  
  function showComments(){
    ReactDOM.render(<Comments endpoint={endpoint} />, document.querySelector("."+className+"-comments"))
  } 
  return (
    <div className='habit'>
      {habit.activity}
      <div className="habit-content">
        My goal is {habit.goal} {habit.goal_measurement} per day.
        <div className="button-holder">
          <div className="button" onClick={showDetails}>Detailed History</div>
          <div className={className+"-details"}></div>
          <div className='button' onClick={showComments}>Comments</div>
        </div>
        <div className={className+"-comments"}></div>
      </div>
    </div>
  )}

export default Habit