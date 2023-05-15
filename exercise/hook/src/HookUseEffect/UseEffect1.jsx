import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [isFirstRender, setisFirstRender] = useState(true);

  const handleCountUp = (e) => {
    setCount(count + 1);
    console.log("+1");
  };

  useEffect(() => {
    if (isFirstRender) {
      console.log("첫 렌더링");
      setisFirstRender(false);
    } else {
      console.log("그 다음 렌더링");
      if (count % 2) {
        alert("홀수입니다");
      } else {
        alert("짝수입니다");
      }
    }

    return () => {
      alert("clean-up");
    };
  }, [count]);

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  );
}
