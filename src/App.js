import React,{useState} from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['First Item','Second Item'])
  return (
    <div className="App">
      <h1>Hello World!! 😁</h1>
      <input/>
      <button>Add Item</button>
      <ul>
        {todos.map((data,index)=>{
          return(
          <li>{data}</li>
          )

        })}
        {/* <li>First Item</li>
        <li>Second Item</li> */}
      </ul>
    </div>
  );
}

export default App;
