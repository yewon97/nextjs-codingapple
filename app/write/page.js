export default function WritePage() {
  return (
    <div>
      <h4>글작성</h4>
      <form action="/api/post/new" method="POST">
        <fieldset>
          <legend>글작성</legend>
          <input name="title" placeholder="글제목" />
          <input name="content" placeholder="글내용" />
          <button type="submit">전송</button>
        </fieldset>
      </form>
    </div>
  );
}
