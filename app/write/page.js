export default function WritePage() {
  return (
    <div>
      <h4>글작성</h4>
      <form action="/api/test" method="POST">
        <button type="submit">POST 버튼</button>
      </form>
      <form action="/api/test" method="GET">
        <button type="submit">GET 버튼</button>
      </form>
      <form action="/api/time" method="GET">
        <fieldset>
          <legend>시간</legend>
          <button type="submit">시간 GET 버튼</button>
        </fieldset>
      </form>
    </div>
  );
}
