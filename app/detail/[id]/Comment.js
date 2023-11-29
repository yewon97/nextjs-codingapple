'use client';

import { useState } from 'react';

export default function Comment(props) {
  const [comment, setComment] = useState('');
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
    } catch (error) {
      console.log('error: ', error);
    }
  };

  return (
    <section>
      <h4>댓글 목록</h4>
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
