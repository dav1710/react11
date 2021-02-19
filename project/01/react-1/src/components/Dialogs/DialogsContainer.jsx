import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let addMessage = () =>{
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) =>{
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }
    return (
        <Dialogs updateNewMessage={onMessageChange} addMessage={addMessage} dialogsPage={state}/>
    );
}

export default DialogsContainer;