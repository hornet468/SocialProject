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
    case SEND_MASSAGE:
      let body = action.AddMessage;

      return {
        ...state,
        MessageData: [...state.MessageData, { id: 5, message: body }],
        newMessageBody: "",
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (AddMessage) => {
  return {
    type: SEND_MASSAGE,
    AddMessage,
  };
};

export default dialogsReducer;
