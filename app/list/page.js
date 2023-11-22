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
            <Link prefetch={false} href={`/detail/${data._id.toString()}`}>
              <h4>{data.title}</h4>
            </Link>
            <p>1월 1일</p>
            <DetailLink />
          </div>
        );
      })}
    </div>
  );
}
