import React from 'react'
const moment = require('moment')

const Comment = ({comment}) => {
  const title = comment.title ? comment.title : "Untitled Comment"
  return (
    <li className="comment">
      <div>
        {comment.poster} {moment(comment.date).calendar()}
      </div>
      <div>
        {title}
      </div>
      <div>
        {comment.content}
      </div>
    </li>
  )
}
export default Comment