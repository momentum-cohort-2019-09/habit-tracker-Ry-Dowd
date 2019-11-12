import React from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'

const moment = require('moment')

class Comments extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      comments: []
    }
  }
  componentDidMount() {
    console.log(this.props)
    fetch(this.props.endpoint)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            comments: result.comments
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error:error
          })
        }
      )
  }
  render(){
    console.log(this.state)
    const {error = null, isLoaded, comments} = this.state
    if (error) {
      return <div>Error: {error.message} </div>
    } else if (!isLoaded){
      return <div>Loading...</div>
    } else {
      return(
        <div className='comment-section'>
          <ul>
            {comments.map((comment, index) =>
              <Comment comment={comment} key={'comment'+index} />
              )}
          </ul>
          <CommentForm habit={this.props.habit} user={this.props.user} />
        </div>
      )
    }
  }
}
export default Comments