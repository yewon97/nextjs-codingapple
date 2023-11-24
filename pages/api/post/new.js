import { connectDB } from '@/util/database';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    req.body.author = session?.user.email;
  }

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
