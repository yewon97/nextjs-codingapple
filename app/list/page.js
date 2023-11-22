import { connectDB } from '@/util/database';

export default async function ListPage() {
  const client = await connectDB;
  const db = client.db('forum');
  const result = await db.collection('post').find().toArray();

  return (
    <div className="list-bg">
      {result.map((data) => {
        return (
          <div className="list-item" key={data._id}>
            <h4>{data.title}</h4>
            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
