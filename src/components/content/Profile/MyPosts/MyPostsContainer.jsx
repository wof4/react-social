import { connect } from 'react-redux';
import { AddPost } from '../../../../redux/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => ({
  profilePage: state.profilePage,
  newPostText: state.profilePage.newPostText,
});
const mapDispatcToProps = (dispatch) => ({
  addPostChange: (newPostText) => {
    dispatch(AddPost(newPostText));
  },
});

const MyPostsContainer = connect(mapStateToProps, mapDispatcToProps)(MyPosts);
export default MyPostsContainer;
