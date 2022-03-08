import React, { useState, useEffect } from 'react';

import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

type ParentObjectPost = {
  id: Post;
};

type Post = {
  id: string;
  title: string;
};

const PostList = () => {
  const [posts, setPosts] = useState<ParentObjectPost>(Object);

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4444/posts');

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  const renderedPosts = Object.values(posts).map((post: Post) => (
    <div
      className="card"
      style={{ marginBottom: '20px', width: '30%' }}
      key={post?.id}
    >
      <div className="card-body">
        <h3>{post?.title}</h3>
        <CommentList postId={post?.id} />
        <CommentCreate postId={post?.id} />
      </div>
    </div>
  ));

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};

export default PostList;
