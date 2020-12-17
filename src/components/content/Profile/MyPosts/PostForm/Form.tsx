import React from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { required, maxLengthCreator } from '../../../../../utils/validators/validator';
import { Textarea } from '../../../../Forms/FormsControls';

type propsType = {AddPost:(newPostText: string) => void}



type valuesType = {
  newPostText: string
}
const Form: React.FC<propsType> = (props) => {
  const onAddPost = (values:valuesType) => {
    props.AddPost(values.newPostText);
  };
  return (
    <div>
      <AddNewPostForm onSubmit={onAddPost} />
    </div>
  );
};

const maxLength5 = maxLengthCreator(5);

const addNewPost: React.FC<InjectedFormProps<valuesType>> = (props) => {
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
const AddNewPostForm = reduxForm<valuesType>({ form: 'newPostTextForm' })(addNewPost);

export default Form;
