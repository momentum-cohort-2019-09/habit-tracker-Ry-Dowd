import React from 'react'

const Habit = ({habit}) => (
    <div className='habit'>
      I'm an individual habit! <br />
      In this case I like {habit.activity}!
    </div>
  )

export default Habit