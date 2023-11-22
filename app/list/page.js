import { connectDB } from '@/util/database';
import Link from 'next/link';
import DetailLink from './DetailLink';

export default async function ListPage() {
  const client = await connectDB;
  const db = client.db('forum');
  const result = await db.collection('post').find().toArray();

  return (
    <div className="list-bg">
      {result.map((data) => {
        return (
          <div className="list-item" key={data._id.toString()}>
            <div className="flex items-center gap-10">
              <Link prefetch={false} href={`/detail/${data._id.toString()}`}>
                <h4>{data.title}</h4>
              </Link>
              <Link href={'/edit/' + data._id.toString()} className="list-btn">
                ✏️
              </Link>
            </div>
            <p>1월 1일</p>
            <DetailLink />
          </div>
        );
      })}
    </div>
  );
}
