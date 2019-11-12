import React from 'react'
import LogDateSelector from './LogDateSelector.js'
import LogForm from './LogForm'
const moment = require('moment')

class LogEdit extends React.Component{
  constructor(props){
    super(props)
    this.state={
      date:null,
      handleSubmit:null,
      log:null
    }
    this.handleDate=this.handleDate.bind(this)
  }
  
  render(){
    return(
      <div>
        <div>Add/Edit a Log!</div>
        <form method='POST' onSubmit={this.state.handleSubmit}>
          <LogDateSelector handleDate={this.handleDate} />
          <LogForm log={this.state.log} />
        </form>
      </div>
    )
  }
  
  handleDate(){
    this.setState({date:moment(event.target.value)})
    const date=moment(event.target.value)
    if (date.isValid()){
      this.setState({log:'new', handleSubmit:this.props.handlePost})
      for (let log of this.props.logs){
        if (date.isSame(log.date, 'day')){
          this.setState({log:log, handleSubmit:this.props.handlePatch})
          break
        }
      }
    } else {
      this.setState({log:null})
    }
  }
}

export default LogEdit