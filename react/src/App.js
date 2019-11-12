import React from 'react';
import ReactDOM from 'react-dom'
import Habit from './Habit'
import { userInfo } from 'os';

function App({user}) {
  return (
    <div className="app tile">
      {user.habits.map((habit, index) =>
        <Habit habit={habit} user={user} key={'habit' + index} />
      )}
      
    </div>
  );
}

export default App;
