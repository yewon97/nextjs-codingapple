import { connectDB } from '@/util/database';

export default async function handler(req, res) {
  if (req.method == 'GET') {
    const client = await connectDB;
    const db = client.db('forum');
    const result = await db.collection('post').find().toArray();
    res.status(200).json(result);
  }
  if (req.method == 'POST') {
    res.status(200).json({ name: '바보' });
  }
}
