import React from 'react';

const Post = (props) => {
  const { message, likesCount } = props;
  return (
    <div>
      <div>
        {message}
      </div>
      <span>
        {' '}
        likes:
        {likesCount}
      </span>
    </div>
  );
};

export default Post;
