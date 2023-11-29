'use client';

import { useState } from 'react';

export default function Comment() {
  const [comment, setComment] = useState('');
  const handleChange = (e) => {
    const { value } = e.target;
    setComment(value);
  };

  const handleClick = () => {
    console.log('comment: ', comment);
    // fetch('/URL', { method: 'POST', body: comment });
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
