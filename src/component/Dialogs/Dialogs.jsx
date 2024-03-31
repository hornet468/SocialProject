import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
  let state = props.messagePage;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageBody(body);
  };

  let messEl = React.createRef();

  let messagesElement = state.MessageData.map((message) => (
    <Message message={message.message} />
  ));
  let dialogsElements = state.DialogsData.map((dialog) => (
    <DialogsItem name={dialog.name} id={dialog.id} key={dialog.id} />
  ));
  let newMessageBody = state.newMessageBody;
  return (
    <div className={classes.dialogsPage}>
      <div className={classes.dialogs}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>
          <div>{messagesElement}</div>
          <div>
            <div>
              {" "}
              <input
                placeholder="Enter your message"
                ref={messEl}
                value={newMessageBody}
                onChange={onNewMessageChange}
                className={classes.input}
              ></input>
            </div>
            <div className={classes.btn12}>
              <div className={classes.btn}>
                <button onClick={onSendMessageClick} className={classes.btn}>
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          fill="currentColor"
                          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span>Send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
