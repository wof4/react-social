import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './Messages.module.css';
import DialogItem from './Dialog/Dialog';
import Message from './Message/Message';
import { Textarea } from '../../Forms/FormsControls';
import { maxLengthCreator, required } from '../../../utils/validators/validator';

const Messages = (props) => {
  const addMessage = (values) => {
    props.addMessageActionCreator(values.messageText);
  };
  const { names, messages } = props;
  const dialogsItems = names.map((n) => <DialogItem name={n.name} key={n.id} id={n.id} />);
  const messagesItems = messages.map((m) => <Message message={m.message} key={m.id} id={m.id} />);
  return (
    <div className={s.dialogs}>
      <div className={s.names}>
        {dialogsItems}
      </div>
      <div className={s.messages}>
        {messagesItems}
      </div>
      <div className={s.inputForm}>
        <span>Новое сообщение</span>
        <AddNewMessageForm onSubmit={addMessage} />
      </div>
    </div>
  );
};

const maxLength300 = maxLengthCreator(50);

const addNewMessage = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field component={Textarea} name="messageText" placeholder="Enter your message" validate={[maxLength300, required]} />
      <button type="submit">Отправить</button>
    </form>
  );
};
const AddNewMessageForm = reduxForm({ form: 'messageFormText' })(addNewMessage);

export default Messages;
