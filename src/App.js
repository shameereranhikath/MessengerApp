import React,{useState,useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';
// import Button from 'material-ui/Button';
// import Button , FormControl from '@material-ui/core/Button';
import {Button,FormControl , InputLabel ,Input} from '@material-ui/core';
import Todo from './components/Todo/Todo';
import db from './firebase'
import firebase from 'firebase'

function App() {
  const [todos, setTodos] = useState(['First Item','Second Item','Third Item by Shameer'])
  const [input, setInput] = useState('');
  const [timestamp, setTimestamp] = useState('');
  useEffect(() => {
    // effect
    // return () => {
    //   // cleanup
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      // console.log(snapshot.docs.map(doc=>doc.data().todo));
      setTodos(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo,timestampdata:doc.timestamp})))
      // setTimestamp(snapshot.docs.map(doc=>doc.data().timestamp))
      ///console.log(snapshot.docs.map(doc=>doc.data().timestamp));
    })
    // }
  }, [input])

  const addTodo=(event)=>{
    event.preventDefault();
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
   // setTodos([...todos,input+'😁'])
    setInput('')
  }
  // console.log(input);
  return (
    <div className="App">
      <h1>TODO APP 📜 </h1>
      
      <table style={{margin:"auto"}}>
        <tr>
          <td>
          <FormControl>
        <InputLabel>✔️write the Todo</InputLabel>
        <Input value={input} onChange={event =>setInput(event.target.value)}/>
      </FormControl>
            </td>
            <td>
              
      <Button disabled={!input} onClick={addTodo} variant="contained" color="primary">
        Add Item</Button>
            </td>
        </tr>
      </table>
    
    
     
      <ul>
        {todos.map((data,index)=>{
          return(
            <Todo text={data}/>
            // timestampdata="{data.timestamp}"
          )

        })}
        {/* <li>First Item</li>
        <li>Second Item</li> */}
      </ul>
    </div>
  );
}

export default App;
