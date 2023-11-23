import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  console.log('req: ', req.body);
  if (req.method === 'DELETE') {
    try {
      let db = (await connectDB).db('forum');
      let result = await db
        .collection('post')
        .deleteOne({ _id: new ObjectId(req.body._id) });

      return res.redirect(200, '/list');
    } catch (error) {
      throw error;
    }
  }
}
