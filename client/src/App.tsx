import React from 'react';
import PostCreate from './components/PostCreate';
import PostList from './components/PostList';

const App = () => {
  return (
    <div className="container">
      <h3>Create Post</h3>
      <PostCreate />
      <hr />
      <PostList />
    </div>
  );
};

export default App;
