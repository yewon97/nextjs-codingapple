export default async function handler(req, res) {
  if (req.method === 'POST') {
    let db = (await connectDB).db('forum');
    let result = await db.collection('user_cred').insertOne(req.body);
  }
}
