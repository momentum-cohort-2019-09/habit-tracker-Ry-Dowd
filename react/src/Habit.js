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
      I'm an individual habit! <br />
      In this case I like {habit.activity}!
      <div className='button' onClick={showComments}>Comments</div>
      <div className={className}></div>
    </div>
  )}

export default Habit