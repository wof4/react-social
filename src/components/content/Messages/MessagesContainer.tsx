import { connect } from 'react-redux';
import { compose } from 'redux';
import { actions } from '../../../redux/messageReducer';
import Messages from './Messages';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { appStateType } from '../../../redux/reduxStore';

const mapStateToProps = (state: appStateType) => ({
  // newMessageText: state.messagesPage.newMessageText,
  names: state.messagesPage.names,
  messages: state.messagesPage.messages,
  isAuth: state.auth.isAuth,
});

const addMessageActionCreator = actions.addMessageActionCreator
export default compose<React.ComponentType>(
  connect
  (mapStateToProps, { addMessageActionCreator }),
  withAuthRedirect,
)(Messages);



