import { connect } from 'react-redux';
import { compose } from 'redux';
import { addMessageActionCreator } from '../../../redux/messageReducer';
import Messages from './Messages';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

const mapStateToProps = (state) => ({
  newMessageText: state.messagesPage.newMessageText,
  names: state.messagesPage.names,
  messages: state.messagesPage.messages,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { addMessageActionCreator }),
  withAuthRedirect,
)(Messages);
