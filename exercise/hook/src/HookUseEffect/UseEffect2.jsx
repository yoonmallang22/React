import React, { useState, useEffect } from "react";

export default function Time() {
  const [today, setToday] = useState(new Date());
  const [hour, setHour] = useState(today.getHours());
  const [min, setMin] = useState(today.getMinutes());
  const [sec, setSec] = useState(today.getSeconds());

  console.log("렌더링이 됩니다..!"); // 렌더링이 잘 되는지 확인용 꼭 넣고 진행하기

  useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date();
      setToday(today);
      setHour(today.getHours());
      setMin(today.getMinutes());
      setSec(today.getSeconds());
    }, 1000);

    return () => {
      clearInterval(interval); // clean-up
    };
  }, [today]);

  // setInterval 처음에만 실행
  // useEffect(() => {
  //   setInterval(() => {
  //     const today = new Date();
  //     setToday(today);
  //     setHour(today.getHours());
  //     setMin(today.getMinutes());
  //     setSec(today.getSeconds());
  //   }, 1000);
  // }, []);

  return (
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}
