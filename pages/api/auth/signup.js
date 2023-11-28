import { connectDB } from '@/util/database';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const hashPw = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashPw;

    try {
      let db = (await connectDB).db('forum');
      let result = await db.collection('user_cred').insertOne(req.body);
      res.status(200).json('가입성공');
    } catch (error) {
      throw error;
    }
  }
}
