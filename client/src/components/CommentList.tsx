import axios from 'axios';
import React, { useEffect, useState } from 'react';

type Comment = {
  postId: string;
};

type Comments = {
  id: string;
  content: string;
};

const CommentList = ({ postId }: Comment) => {
  const [comments, setComments] = useState<Comments[]>([]);

  const fetchComments = async () => {
    const res = await axios.get(
      `http://localhost:4445/posts/${postId}/comments`
    );

    setComments(res.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });
  return <ul>{renderedComments}</ul>;
};

export default CommentList;
