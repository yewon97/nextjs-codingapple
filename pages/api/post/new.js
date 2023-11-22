import { connectDB } from '@/util/database';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    let db = (await connectDB).db('forum');
    let result = await db.collection('post').insertOne(req.body);
    // console.log('result: ', result);
    return res.redirect(302, '/list');
  }
}
