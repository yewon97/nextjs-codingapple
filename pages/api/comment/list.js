import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const _id = JSON.parse(req.body).parent;

  const db = (await connectDB).db('forum');
  let result = await db
    .collection('comment')
    .find({ parent: new ObjectId(_id) })
    .toArray();
  res.status(200).json(result);
}
