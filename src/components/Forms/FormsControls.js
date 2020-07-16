import React from 'react';
import s from './formsControls.module.css';

export const Textarea = ({ input, meta, ...props }) => (
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

export const Input = ({ input, meta, ...props }) => (
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
