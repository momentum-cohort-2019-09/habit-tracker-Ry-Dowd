import React from 'react'

const LogForm = ({log}) => {
  if (log === null){
    return <div></div>
  }
  return(
    <div>
      <div className="field">
        <label className='label'>Actual Daily Total</label>
        <div className='control'>
          <input type='number' name='actual' min='0' defaultValue={log!== 'new' ? log.actual :''}></input>
        </div>
      </div>
      <button className='button is-link' action='submit'>Submit</button>
    </div>
  )
}

export default LogForm