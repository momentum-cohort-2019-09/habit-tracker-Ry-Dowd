import React from 'react'
import Chart from './Chart'
import LogEdit from './LogEdit'
import Cookies from 'js-cookie'

const moment = require ('moment')

class Details extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      logs:this.props.habit.logs
    }
    this.handleChange=this.handleChange.bind(this)
    this.handlePost=this.handlePost.bind(this)
    this.handlePatch=this.handlePatch.bind(this)
  }
  
  render(){
    return (
      <div>
        <div>
          <Chart logs={this.state.logs} goal={this.props.habit.goal} id={this.props.habit.id} />
        </div>
        <div>
          <LogEdit logs={this.state.logs} id={this.props.habit.id} handlePatch={this.handlePatch} handlePost={this.handlePost} />
        </div>
      </div>
    )
  }
  handleChange(){
    return
  }
  
  handlePost(){
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    fetch('/api/logs/',{
      method: 'POST',
      body: JSON.stringify({habit:this.props.habit.id, date:formData.get('date'), actual:formData.get('actual')}),
      headers: { 'Content-Type': 'application/json', 'X-CSRFToken': Cookies.get('csrftoken') }
    })
    .then (res => res.json())
    .then(response => {
      let newLogs = this.state.logs.concat(response).sort((a, b) => moment(a.date) - moment(b.date))
      this.setState({logs:newLogs})
    })
  }
  handlePatch(){
    return
  }
}

export default Details