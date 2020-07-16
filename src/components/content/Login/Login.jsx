import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Input } from '../../Forms/FormsControls';
import { requiredPassword, requiredLogin } from '../../../utils/validators/validator';
import { login } from '../../../redux/authReducer';

const Login = (props) => {
  const { captcha, isAuth } = props;
  const onSubmit = (formData) => {
    props.login(formData.Login, formData.Password, formData.rememberMe, formData.captcha);
  };
  if (isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <h1>Login form</h1>
      <LoginReduxForm onSubmit={onSubmit} captcha={captcha} />
    </div>
  );
};

const containerForLogin = (props) => {
  const { captcha, handleSubmit } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Field component={Input} name="Login" type="text" validate={[requiredLogin]} />
        </div>
        <div>
          <Field component={Input} name="Password" type="text" validate={[requiredPassword]} />
        </div>
        <div>
          <Field component={Input} name="rememberMe" type="checkbox" />
          {' '}
          remember me
        </div>
        <div>{captcha && <img alt="" src={captcha} /> }</div>
        <div>{captcha && <Field component={Input} name="captcha" type="text" validate={[requiredPassword]} /> }</div>
        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
      <div>
        <h3>Тестовые логин и пароль</h3>
      </div>
      <div>
      <div>Email:<span>&ensp;free@samuraijs.com</span></div>
      <div> Password:<span>&ensp;free</span></div>
      </div>
    </div>
  );
};

const LoginReduxForm = reduxForm({ form: 'login' })(containerForLogin);

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captcha: state.auth.captcha,
});

export default connect(mapStateToProps, { login })(Login);
