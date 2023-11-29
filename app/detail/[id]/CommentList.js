'use client';

export default function CommentList({ list }) {
  return (
    <div>
      {list.length > 0
        ? list.map((item) => {
            return (
              <dl key={item._id} className="flex gap-10">
                <dt>{item.author}</dt>
                <dd>{item.comment}</dd>
              </dl>
            );
          })
        : '댓글 없음'}
    </div>
  );
}
