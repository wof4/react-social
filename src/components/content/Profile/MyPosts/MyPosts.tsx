import React from 'react';
import { initialStateType } from '../../../../redux/profileReducer';
import Post from './MyPost/Post';
import Form from './PostForm/Form';

type propsType = {
  AddPost: (newPostText: string) => {
  type: "ADD_POST"
  newPostText: string}
  profilePage:initialStateType 
}

const MyPosts = (props:propsType) => {
  const {
    profilePage, AddPost
  } = props;
  const postsElement = profilePage.posts.map((post) => (
    <Post
      message={post.message}
      key={post.id}
      likesCount={post.LikesCount}
    />
  ));
  return (
    <div>
      <Form  AddPost={AddPost} />
      { postsElement }
    </div>
  );
};
export default MyPosts;


// postChange={postChange}
// newPostText={newPostText}