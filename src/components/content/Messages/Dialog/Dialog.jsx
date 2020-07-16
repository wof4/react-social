import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';

const DialogItem = (props) => {
  const { name, id } = props;
  return (
    <div className={s.name}>
      <NavLink to={`/messages/${id}`}>{name}</NavLink>
    </div>
  );
};
export default DialogItem;
