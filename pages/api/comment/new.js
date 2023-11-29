import { connectDB } from '@/util/database';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(500).json('로그인하세요~');
  }

  const data = JSON.parse(req.body);

  if (req.method === 'POST') {
    const submitData = {
      comment: data.comment,
      parent: new ObjectId(data.parent),
      author: session.user.email,
    };
    if (req.body.comment == '') {
      return 응답.status(500).json('댓글써라');
    }
    try {
      let db = (await connectDB).db('forum');
      let result = await db.collection('comment').insertOne(submitData);
      res.status(200).json('저장완료');
    } catch (error) {
      throw error;
    }
  }
}
