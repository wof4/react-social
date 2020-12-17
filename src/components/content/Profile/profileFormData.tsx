import React from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { profileUserType } from '../../../type/type';
import { Input } from '../../Forms/FormsControls';

type propsType = { profile: profileUserType }
type contactsPropsType = {
  contactsTitle: string
  name: string
  placeholder: string
}



const Contacts: React.FC<contactsPropsType> = ({ contactsTitle, name, placeholder }) => (
  <div>
    <b>{contactsTitle}</b>
    <Field component={Input} placeholder={placeholder} name={name} type="text" />
  </div>
);


const ProfileFormData: React.FC<InjectedFormProps<profileUserType, propsType> & propsType > = (props) => {

  const { handleSubmit, profile } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <b>Имя</b>
          <Field component={Input} name="fullName" type="text" placeholder="Имя" />
        </div>
        <div>
          <b>Обо мне</b>
          <Field component={Input} name="aboutMe" type="text" placeholder="Обо мне" />
        </div>
        <div>
          <b>Ищу ли я работу</b>
          <Field component={Input} name="lookingForAJob" type="checkbox" />
        </div>
        <div>
          <b>Описание вакансии</b>
          <Field component={Input} name="lookingForAJobDescription" type="text" placeholder="Описание вакансии" />
        </div>
        <h3>Контакты:</h3>
        {Object.keys(profile.contacts).map((key) => <Contacts key={key} contactsTitle={key} name={`contacts.${key}`} placeholder={key} />)}
        <button type="submit">сохранить</button>
      </form>
    </div>
  );
};

const ProfileReduxForm = reduxForm<profileUserType, propsType>({ form: 'profile' })(ProfileFormData);

export default ProfileReduxForm;
