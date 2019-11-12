import React from 'react'
import ReactDOM from 'react-dom'
import Comments from './Comments'
import Details from './Details'
import CommentForm from './CommentForm'

const Habit = ({ habit, user }) => {
  const endpoint = "/api/habits/" + habit.id
  const className = 'comments' + habit.id

  function showDetails() {
    ReactDOM.render(<Details user={user} habit={habit}/>, document.querySelector("." + className + "-details"))
  }

  function hideDetails() {
    ReactDOM.render('', document.querySelector("." + className + "-details"))
  }

  function showComments() {
    ReactDOM.render(<Comments habit={habit} user={user} endpoint={endpoint} />, document.querySelector("." + className + "-comments"))
  }
  return (
    <div className='habit tile is-4 is-parent box'>

      <div className="habit-content tile is-child">
        <div>
          {habit.activity}
        </div>
        My goal is {habit.goal} {habit.goal_measurement} per day.
        <div className="button-holder">
          <div className="button" onClick={showDetails}>Detailed History</div>
          <div className={className + "-details"}></div>
          
        </div>
        <div className={className + "-comments"}><div className='button' onClick={showComments}>Comments</div></div>
      </div>
    </div>
  )
}

export default Habit