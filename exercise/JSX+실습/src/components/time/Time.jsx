import "./Time.css";

function Time() {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const date = d.getDate();
  const hour = d.getHours();
  const min = d.getMinutes();
  const sec = d.getSeconds();

  return (
    <div className="bgColor">
      <p className="color">년 : {year}</p>
      <p>
        월/일 : {month}/{date}
      </p>
      <p>
        시간 : {hour}시 {min}분 {sec}초
      </p>
    </div>
  );
}

export default Time;
