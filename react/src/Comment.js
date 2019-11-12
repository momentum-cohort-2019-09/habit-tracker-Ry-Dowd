import React from 'react'
import Cookies from 'js-cookie'
const moment = require('moment')

const Comment = ({comment}) => {
  const title = comment.title ? comment.title : "Untitled Comment"
  const csrftoken = Cookies.get('csrftoken')
  
  function deleteComment(){
    event.preventDefault()
    fetch('/api/comments/'+comment.id, {
      method:"DELETE",
      headers: {'X-CSRFToken':csrftoken}
    })
  }
  
  return (
    <li className="comment">
      <a href="" onClick={deleteComment}>DELETE</a>
      <div>
        {comment.poster} {moment(comment.date).calendar()}
      </div>
      <div>
        <strong>{title}</strong>
      </div>
      <div>
        {comment.content}
      </div>
    </li>
  )
}
export default Comment