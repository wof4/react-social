import { connect } from 'react-redux';
import { actions } from '../../../../redux/profileReducer';
import { appStateType } from '../../../../redux/reduxStore';
import MyPosts from './MyPosts';


const AddPost = actions.AddPost

const mapStateToProps = (state:appStateType) => ({
  profilePage: state.profilePage,
  // newPostText: state.profilePage.newPostText,
});
// const mapDispatcToProps = (dispatch) => ({
//   addPostChange: (newPostText) => {
//     dispatch(AddPost(newPostText));
//   },
// });

const MyPostsContainer = connect(mapStateToProps, {AddPost})(MyPosts);
export default MyPostsContainer;
