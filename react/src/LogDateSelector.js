import React from 'react'

class LogDateSelector extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){
    return(
      <div className='field'>
        <input type="date" name='date' onChange={this.props.handleDate} />
      </div>
    )
  }
}

export default LogDateSelector