import React from 'react'

const Comment = ({comment}) => {
  const title = comment.title ? comment.title : "Untitled Comment"
  return (
    <li>
      <div>
        {comment.poster} {comment.date}
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