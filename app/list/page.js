import { connectDB } from '@/util/database';
import Link from 'next/link';
import DetailLink from './DetailLink';
import ListItem from './ListItem';

export default async function ListPage() {
  const client = await connectDB;
  const db = client.db('forum');
  const result = (await db.collection('post').find().toArray()).map((a) => {
    a._id = a._id.toString();
    return a;
  });

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
}
