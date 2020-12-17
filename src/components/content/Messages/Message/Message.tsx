import React from 'react';
import s from './Message.module.css';

type propsType ={message: string, id: number }
const Message = (props: propsType) => {
  const { message } = props;
  return (
    <div className={s.message}>
      {message}
    </div>
  );
};

export default Message;
