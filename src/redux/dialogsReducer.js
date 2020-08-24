const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Vika'},
        {id: 2, name: 'Den'}
    ],
    messages: [
        {id: 1, message: 'Hi how are you?'},
        {id: 2, message: 'Fine, thanks.'}
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.newMessageBody}] 
            };

        default:
            return state;    
    }
};

export const sendMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;