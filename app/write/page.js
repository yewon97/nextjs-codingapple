export default function WritePage() {
  return (
    <div>
      <h4>글작성</h4>
      <form action="/api/post/new" method="POST">
        <fieldset>
          <legend>글작성</legend>
          <input type="text" name="title" placeholder="글제목" required />
          <input type="text" name="content" placeholder="글내용" required />
          <button type="submit">전송</button>
        </fieldset>
      </form>
    </div>
  );
}
