'use client';

import { useState, useEffect } from 'react';
import CommentList from './CommentList';

export default function Comment(props) {
  const [comment, setComment] = useState('');
  const [list, setList] = useState([]);

  const fetchCommentList = () => {
    fetch('/api/comment/list', {
      method: 'POST',
      body: JSON.stringify({ parent: props._id }),
    })
      .then((res) => res.json())
      .then(setList)
      .catch(console.log);
  };

  useEffect(() => {
    fetchCommentList();
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setComment(value);
  };

  const handleClick = async () => {
    try {
      const response = await fetch('/api/comment/new', {
        method: 'POST',
        body: JSON.stringify({ comment, parent: props._id }),
      });
      const data = await response.json();
      fetchCommentList();
      setComment('');
    } catch (error) {
      console.log('error: ', error);
    }
  };

  return (
    <section>
      <h4>댓글 목록</h4>
      <CommentList list={list} />
      <div className="flex gap-10">
        <input
          type="text"
          name="comment"
          id="comment"
          value={comment}
          onChange={handleChange}
        />
        <button type="button" onClick={handleClick}>
          댓글전송
        </button>
      </div>
    </section>
  );
}
