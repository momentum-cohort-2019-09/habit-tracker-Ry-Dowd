import React from 'react';
import ReactDOM from 'react-dom'
import Habit from './Habit'
import { userInfo } from 'os';

function App({user}) {
  return (
    <div className="App">
      {user.habits.map((habit, index) =>
        <Habit habit={habit} />
      )}
      
    </div>
  );
}

export default App;
