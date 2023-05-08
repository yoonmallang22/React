// 시간 보여주기
function Time() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <p style={{ color: "red" }}>년 : {year}</p>
      <p>월/일 : {month}/{date}</p>
      <p>시간 : {hour}시 {min}분 {sec}초</p>
    </div>
  );
}

export default Time;
