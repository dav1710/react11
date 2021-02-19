import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let DialogsElement = state.dialogs.map( d => <DialogsItem name={d.name} id={d.id}/> )
    let MessagesElements = state.messages.map( m => <Message message={m.message}/> )
    let newMessageElement = React.createRef();
    let addMessage = () =>{
        props.addMessage();
    }
    let onMessageChange = (text) =>{
        text = newMessageElement.current.value;
        props.updateNewMessage(text);
    }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogsElement}
            </div>
            <div className={s.messages}>
                {MessagesElements}
                <div className={s.addMessage}>
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText} cols="60" rows="4" />
                    <button onClick={addMessage} className={s.button}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;