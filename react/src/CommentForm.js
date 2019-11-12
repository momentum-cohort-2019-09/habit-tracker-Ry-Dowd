import React from 'react'
import ReactDOM from 'react-dom'
import Cookies from 'js-cookie'
import Comment from './Comment'

const CommentForm = ({habit, user}) => {
  const csrftoken= Cookies.get('csrftoken')
  console.log(csrftoken)
  
  function postComment(){
    event.preventDefault()
    const form = document.getElementById("comment-form-"+habit.id)
    const formData = new FormData(form)
    console.log(formData.get('title'))
    fetch('/api/comments/', {
      method: 'POST',
      body: JSON.stringify({title:formData.get('title'), content:formData.get('comment'), 'habit':habit.id, 'poster':user.username}),
      headers: { 'Content-Type': 'application/json', 'X-CSRFToken': csrftoken }
    })
    .then(response => response.json())
    .then(response => { 
      console.log(response)
      console.log(response.status_code)
      console.log('rendering?')
      ReactDOM.render(<Comment comment={response}/>, document.getElementById("comment-anchor-"+habit.id))
    })
    
    form.reset()
  }
  return(
    <div id={"comment-anchor-"+habit.id}>
      <div>Add Comment</div>
      <form id={"comment-form-"+habit.id} method='POST' onSubmit={postComment}>
        <div className='field'>
          <label className='label'>Title</label>
          <div className='control'>
            <input className='input' type='text' name='title' />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Comment</label>
          <div className='control'>
            <textarea className='textarea' name='comment' />
          </div>
        </div>
        <div className='field'>
          <div className='control'>
            <button className='button is-link' type='submit'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CommentForm