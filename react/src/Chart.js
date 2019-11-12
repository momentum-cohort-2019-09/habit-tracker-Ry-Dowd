import React from 'react'
import {Line} from 'react-chartjs-2'
const moment = require('moment')

const Chart = ({logs, goal, id}) => {
  const today = moment()
  let dateArray = []
  let values
  let data
  
  if (logs.length > 0){
    const start = moment(logs[0].date)
    for (let date=start; date<=today; date.add(1, 'd')){
      dateArray.push(moment(date))
    }
    console.log(logs)
    console.log(dateArray)
    values = dateArray.map((date) => {
      for (let log of logs){
        if (date.isSame(log.date,'day')){
          return log.actual
        }
      }
      return 0
    })
    console.log(values)
    let dates = dateArray.map(date => date.format('MM/D/YY'))
    console.log(dates)
    data={
      labels:dates,
      datasets:[{
        label:"History",
        data:values
      }]
    }
    return (
      <div>
        <Line data={data} width={300} height={200} />
      </div>
    )
  }
  
  
  return (
    <div>
      There's no history for this habit yet.
    </div>
  )
}

export default Chart