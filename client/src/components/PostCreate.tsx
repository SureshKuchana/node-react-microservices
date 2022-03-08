import React, { useState } from 'react';

import axios from 'axios';

const PostCreate = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    await axios.post('http://localhost:4444/posts', {
      title,
    });

    setTitle('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="mt-2 btn btn-primary">Submit</button>
        <hr />
        <h3>Posts</h3>
      </form>
    </>
  );
};

export default PostCreate;
