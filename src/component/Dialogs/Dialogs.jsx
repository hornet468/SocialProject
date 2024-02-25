import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import Message from './Message/Message';
import DialogsItem from './DialogItem/DialogItem';

const Dialogs = (props) => {

      let addMess = () => {
            let message = messEl.current.value;
            alert(message)
     }
     
     let messEl = React.createRef();
  

      let messagesElement = props.state.MessageData.map( message => <Message message={message.message}/>)
      let dialogsElements = props.state.DialogsData.map( dialog => <DialogsItem name={dialog.name} id={dialog.id} />)
	return (
           
      <div className={classes.dialogsPage} >
         <div className= {classes.dialogs}>
             {dialogsElements}
         </div>
     <div className={classes.messages}>
             {messagesElement}
     </div>
     <div>
     <textarea ref={messEl}></textarea>
     </div>
     <div className={classes.btn12} >
     <button onClick={addMess} className={classes.btn}>clic</button>
     </div>
      </div>
      )
   
};

export default Dialogs;