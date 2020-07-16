import React from 'react';
import Post from './MyPost/Post';
import Form from './PostForm/Form';

const MyPosts = (props) => {
  const {
    profilePage, postChange, addPostChange, newPostText,
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
      <Form postChange={postChange} addPostChange={addPostChange} newPostText={newPostText} />
      { postsElement }
    </div>
  );
};
export default MyPosts;
