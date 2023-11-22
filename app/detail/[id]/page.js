import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function DetailPage(props) {
  let db = (await connectDB).db('forum');
  let result = await db
    .collection('post')
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div>
      <h3>상세페이지임</h3>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
}
