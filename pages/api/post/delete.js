import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    try {
      let db = (await connectDB).db('forum');
      let result = await db
        .collection('post')
        .deleteOne({ _id: new ObjectId(req.body._id) });

      res.status(200).json('삭제완료');
    } catch (error) {
      throw error;
    }
  }
}
