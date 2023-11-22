import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function EditPage(props) {
  let db = (await connectDB).db('forum');
  let result = await db
    .collection('post')
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div>
      <h4>수정페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input type="hidden" name="_id" defaultValue={result._id.toString()} />
        <fieldset>
          <legend>글수정</legend>
          <input
            type="text"
            name="title"
            placeholder="글제목"
            defaultValue={result.title}
            required
          />
          <input
            type="text"
            name="content"
            placeholder="글내용"
            defaultValue={result.content}
            required
          />
        </fieldset>
        <button type="submit">수정하기</button>
      </form>
    </div>
  );
}
