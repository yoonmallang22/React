import { useState, useMemo } from "react";

function 부하() {
  console.log("계산시작");
  let s = 0;
  for (let i = 0; i < 1000000000; i++) {
    s += i;
  }
  console.log("계산끝");
  return s;
}

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const handleCountUp = (e) => {
    setCount(count + 1);
    console.log(count);
  };
  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1);
    console.log(countTwo);
  };

  console.log("랜더링!!");

  // 평소에는 Memo되어 있는 것을 가져다쓰고
  // countTwo가 바뀌었을때 부하 함수를 실행키는 Memo
  const result = useMemo(() => {
    return 부하();
  }, [countTwo]);
  // const result = useMemo(부하, [countTwo]);

  return (
    <div className="App">
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>up!</button>
    </div>
  );
}
