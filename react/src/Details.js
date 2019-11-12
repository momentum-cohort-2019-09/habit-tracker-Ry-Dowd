import React from 'react'
import Chart from './Chart'

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
        <Chart logs={this.state.logs} goal={this.props.habit.goal} id={this.props.habit.id} />
      </div>
    )
  }
  handleChange(){
    return
  }
  handlePost(){
    return
  }
  handlePatch(){
    return
  }
}

export default Details