import React, { useState } from "react";
// 부하가 큰 함수, 처리가 오래걸리는 함수
function getName() {
  console.log("사실은 겁나 오래기다리는중...");
  return "말랑";
}
export default function LazyInitialize() {
  // 함수 실행(렌더링)될 때마다 useState() 실행 -> getName 함수 실행
  // 초기화는 한 번만 일어난다. (아래 주석 참고)
  // const [name, setName] = useState(getName());

  // 마운트, 업데이트 과정을 리액트가 기억하고 있다
  // useState 매번 실행되면서 검사: 첫번째 실행? -> 마운트, 초기화 / 그 이후 실행? -> 업데이트
  const [num, setNum] = useState(0);
  // lazy initialize
  // 리액트가 마운트 때만 getName 함수를 실행한다
  const [name, setName] = useState(getName);
  return (
    <>
      <br />
      <div>Lazy initialize</div>
      <div>
        안녕하세요 {name}! 현재 숫자는{num}입니다
      </div>
      {/* 함수형 업데이트, bulletproof code(방탄 코드): 뜻밖의 상황에도 오류가 나지 않는다 */}
      <button onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</button>
      {/* <button onClick={() => setNum(num+1)}>{num}</button> */}
    </>
  );
}
