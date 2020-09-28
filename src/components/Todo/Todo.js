import React, { useState } from 'react'
import {List,ListItem,ListItemText,Button,Modal} from '@material-ui/core'
import './Todo.css';
import db from '../../firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from '@material-ui/core/styles';
const useStyles=makeStyles((theme)=>({
  paper: {
    position: 'absolute',
    width:400,
    backgroundColor: theme.palette.background.paper,
    border:'px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2,4,3),
  },
}));
function Todo(props) {
  const classes = useStyles();
  const [open,setOpen]=useState(false)
  const [input,setInput]=useState('')
  const handleOpen=()=>{
    setOpen(true);
  };

  const updateTodo=()=>{
    db.collection('todos').doc(props.text.id).set({todo:input},{merge:true});
   // alert("Click Updated");
    setOpen(false)
  }
    return (
      <>
      <Modal
        open={open}
        onClose={e=>setOpen(false)}>
        <div className={classes.paper}>
          <h1>Update</h1>
          <input placeholder={props.text.todo} value={input} onChange={event=>setInput(event.target.value)}/>
         &nbsp; <Button variant="contained"  onClick={updateTodo}>OK</Button>
        </div>
        {/* <div className={classes.paper}></div>
        <input></input> */}
      </Modal>
        {/* // <div>
        //        <li key={props.indexval}>{props.text}</li>
        // </div> */}
        <List>
         
        <ListItem key={props.text.id}>
        <table width="50%"  style={{margin:"auto"}}>
            <tr>
              <td width="50%">
              <ListItemText primary={props.text.todo} secondary={props.text.timestampdata}/>
              </td>
              <td width="5%"><Button color="primary" variant="outlined" onClick={e=>setOpen(true)}>Update</Button></td>
              <td width="5%"> <DeleteIcon color="secondary" onClick={event=>db.collection('todos').doc(props.text.id).delete()}>ddd</DeleteIcon></td>
            </tr>
          </table>
          
          
      
        </ListItem>
       
      {/* <Button onClick={event=>db.collection('todos').doc(props.text.id).delete()} variant="contained" color="secondary">🗑️</Button> */}
      </List>
      </>
    )
}

export default Todo
