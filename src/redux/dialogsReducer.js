const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MASSAGE = "SEND_MASSAGE";

let initialState = {
  DialogsData: [
    { id: 1, name: "Nikita" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Tom" },
    { id: 4, name: "Obama" },
  ],
  MessageData: [
    { id: 1, message: "hi" },
    { id: 2, message: "what are you doing" },
    { id: 3, message: "yo" },
    { id: 4, message: "I will win" },
  ],
  newMessageBody: " ",
};

const dialogsReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.body };

    case SEND_MASSAGE:
      let body = state.newMessageBody;

      return {
        ...state,
        MessageData: [...state.MessageData, { id: 5, message: body }],
        newMessageBody: "",
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MASSAGE,
  };
};

export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export default dialogsReducer;

/*if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    state.newMessageBody = action.body;
  } else if (action.type === SEND_MASSAGE) {
    let body = state.newMessageBody;
    state.newMessageBody = " ";

    state.MessageData.push({
      id: 5,
      message: body,
    });
  }

  return state;*/
