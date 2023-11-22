import { connectDB } from '@/util/database';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    if (req.body.title == '') {
      return 응답.status(500).json('제목써라');
    }
    try {
      let db = (await connectDB).db('forum');
      let result = await db.collection('post').insertOne(req.body);
      // console.log('result: ', result);
      return res.redirect(302, '/list');
    } catch (error) {
      throw error;
    }
  }
}
