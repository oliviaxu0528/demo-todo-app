import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todo, setTodo] = useState('');

  function post () {
    axios.post('/todo', {
      test: 'test'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div>
      <div className="App">
        Hello App!
      </div>
      <input onChange={(event)=>{
        setTodo(event.target.value)
        console.log(event.target.value);
        }}>
      </input>
      <button onClick={()=>{
        post();
        console.log('POST sent to server')
      }}>
        Submit New Todo
      </button>
    </div>
  );
}

export default App;
