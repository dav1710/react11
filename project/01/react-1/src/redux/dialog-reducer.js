const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
    newMessageText: ['New Message'],
    dialogs : [
        {id: 1, name: 'David'},
        {id: 2, name: 'Hamayak'},
        {id: 3, name: 'Vardanik'},
        {id: 4, name: 'Hamazasp'},
        {id: 5, name: 'Anbrnasbos'}
    ],
    messages: [
        {id: 1, message: 'Hi bro'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Its Ok, thank you'},
        {id: 4, message: 'By By'},
    ],
};

const dialogsReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id:5,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.dialogsText;
            return state;
        default:
            return state;
    }

}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE , dialogsText: text});

export default dialogsReducer;