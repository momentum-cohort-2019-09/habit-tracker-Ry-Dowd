import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const user = JSON.parse(document.getElementById("data").textContent)

ReactDOM.render(<App user={user} />, document.getElementById('root'));


