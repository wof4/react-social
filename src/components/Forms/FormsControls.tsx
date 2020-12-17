import React from 'react';
import { InjectedFormProps } from 'redux-form';
import s from './formsControls.module.css';


type metaType = {
  error: string
  touched: boolean
}

type PropsType = {
  input: string
  meta : metaType
}

export const Textarea: React.FC<PropsType> = ({ input, meta, ...props }) => (
  <div>
    <div>
      <textarea
        className={meta.error && meta.touched
          ? s.textareaError
          : undefined}
        {...input}
        {...props}
      />
    </div>
    <div className={s.textError}>
      {meta.error && meta.touched ? <span>{meta.error}</span> : undefined}
    </div>
  </div>
);



export const Input: React.FC<PropsType> = ({ input, meta, ...props }) => (
  <div>
    <div>
      <input
        className={meta.error && meta.touched
          ? s.textareaError
          : undefined}
        {...input}
        {...props}
      />
    </div>
    <div className={s.textError}>
      {meta.error && meta.touched ? <span>{meta.error}</span> : undefined}
    </div>
  </div>
);




