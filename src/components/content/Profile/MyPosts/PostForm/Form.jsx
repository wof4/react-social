import React from 'react';
// import s from './Form.module.css'
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../../../utils/validators/validator';
import { Textarea } from '../../../../Forms/FormsControls';

const Form = (props) => {
  const onAddPost = (values) => {
    props.addPostChange(values.newPostText);
  };
  return (
    <div>
      <AddNewPostForm onSubmit={onAddPost} />
    </div>
  );
};

const maxLength5 = maxLengthCreator(5);

const addNewPost = (props) => {
  const { handleSubmit } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Field component={Textarea} name="newPostText" placeholder="Enter your message" validate={[required, maxLength5]} />
        </div>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};
const AddNewPostForm = reduxForm({ form: 'newPostTextForm' })(addNewPost);

export default Form;
