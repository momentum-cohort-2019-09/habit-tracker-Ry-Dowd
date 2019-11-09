import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const user = JSON.parse(document.getElementById("data").textContent)
console.log(user)

ReactDOM.render(<App user={user} />, document.getElementById('root'));


