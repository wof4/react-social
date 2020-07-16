import React, { useState } from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Loader from '../../Loader/loader';
import iconYes from '../../../img/yes.jpg';
import iconNo from '../../../img/no.jpg';
import userDefaultIcon from '../../../img/users.jpg';
import ProfileStatusWithHook from './ProfileStatusWithHook';
import ProfileReduxForm from './profileFormData';

const Profile = React.memo((props) => {
  const {
    profile, status, changePhoto, changeProfile, updateMyStatus,
  } = props;

  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return (
      <Loader />
    );
  }

  const onChangeMyPhoto = (e) => {
    changePhoto(e.target.files[0]);
  };

  const Contacts = ({ contactsTitle, ContactsValue }) => (
    <div>
      {' '}
      {contactsTitle}
      :
      {ContactsValue}
    </div>
  );

  const onSubmit = (formData) => {
    changeProfile(formData, formData.userId);
    setEditMode(false);
  };
  return (
    <div className={`${s.content}`}>
      <div>
        <img className={`${s.content__foto}`} src="https://3l0wd94f0qdd10om8642z9se-wpengine.netdna-ssl.com/wp-content/uploads/2016/01/Banner_Blog_1200x300_v0.2-1000x250.jpg" alt="" />
      </div>
      <div className={s.user__description}>
        <div>
          <img alt="" src={profile.photos.large != null ? profile.photos.large : userDefaultIcon} />
          <div>
            <input onChange={onChangeMyPhoto} type="file" />
          </div>
          <div>
            <button type="button" onClick={() => { setEditMode(true); }}>Редактировать профиль</button>
          </div>
          {editMode
          && <ProfileReduxForm initialValues={profile} onSubmit={onSubmit} profile={profile} />}
        </div>
        <div>
          <div>
            Имя:
            {profile.fullName}
          </div>
          <div>
            Обо мне :
            {profile.aboutMe}
          </div>
          <div>
            Ищу ли я работу:
            {profile.lookingForAJob ? (
              <span>
                Да
                <img alt="" className={s.job__icon} src={iconYes} />
              </span>
            ) : (
              <span>
                {' '}
                Нет
                <img alt="" src={iconNo} className={s.job__icon} />
              </span>
            )}
          </div>
          <div>
            Описание поиска вакансии :
            {profile.lookingForAJobDescription}
          </div>
          <div>
            <h3>Контакты :</h3>
            {Object.keys(profile.contacts)
              .map((key) => (
                <Contacts
                  key={key}
                  contactsTitle={key}
                  ContactsValue={profile.contacts[key]}
                />
              ))}
          </div>
          <ProfileStatusWithHook status={status} updateMyStatus={updateMyStatus} />
        </div>
        <div />
      </div>
      <div>
        <h1>Мои Посты</h1>
        <MyPostsContainer />
      </div>
    </div>
  );
});

export default Profile;
