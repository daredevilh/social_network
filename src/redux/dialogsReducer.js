const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Vika'},
        {id: 2, name: 'Den'}
    ],
    messages: [
        {id: 1, message: 'Hi how are you?'},
        {id: 2, message: 'Fine, thanks.'}
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.newMessageText
            }
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default:
            return state;    
    }
};

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
});


export default dialogsReducer;