import React from 'react';
type propsType = {message: string, likesCount: number}

const Post = (props: propsType) => {
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
