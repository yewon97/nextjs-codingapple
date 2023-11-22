import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    if (req.body.title == '') {
      return 응답.status(500).json('제목써라');
    }
    try {
      let db = (await connectDB).db('forum');

      const replace = { title: req.body.title, content: req.body.content };

      let result = await db
        .collection('post')
        .updateOne({ _id: new ObjectId(req.body._id) }, { $set: replace });

      return res.redirect(302, '/list');
    } catch (error) {
      throw error;
    }
  }
}
