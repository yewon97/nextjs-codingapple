'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ListItem({ result }) {
  const router = useRouter();
  const handleDelete = (id) => async () => {
    fetch('/api/post/delete', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ _id: id }),
    })
      .then((data) => data.json())
      .then(alert)
      .finally(() => router.refresh());
  };

  return (
    <>
      {result.map((data) => {
        return (
          <div className="list-item" key={data._id}>
            <div className="flex items-center gap-10">
              <Link prefetch={false} href={`/detail/${data._id}`}>
                <h4>{data.title}</h4>
              </Link>
              <Link href={'/edit/' + data._id} className="list-btn">
                ✏️
              </Link>
              <button type="button" onClick={handleDelete(data._id)}>
                🗑️
              </button>
            </div>
            <p>1월 1일</p>
          </div>
        );
      })}
    </>
  );
}
