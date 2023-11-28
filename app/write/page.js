import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function WritePage() {
  const session = await getServerSession(authOptions);
  if (session == null) {
    return redirect('/api/auth/signin');
  } else {
    return (
      <div>
        <h4>글작성</h4>
        <form action="/api/post/new" method="POST">
          <fieldset>
            <legend>글작성</legend>
            <input
              type="text"
              name="title"
              placeholder="글제목"
              required
              autoFocus
            />
            <input type="text" name="content" placeholder="글내용" required />
            <button type="submit">전송</button>
          </fieldset>
        </form>
      </div>
    );
  }
}
