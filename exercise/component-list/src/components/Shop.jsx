import React, { useState } from "react";

export default function Shop() {
  const [datas, setDatas] = useState([
    {
      title: "개발자 무릎 담요",
      price: 17500,
      id: 101,
    },
    {
      title: "Hack Your Life 개발자 노트북 파우치",
      price: 29000,
      id: 102,
    },
    {
      title: "우당탕탕 라이켓의 실험실 스티커북",
      price: 29000,
      id: 103,
    },
    {
      title: "버그를 Java라 버그잡는 개리씨 키링",
      price: 29000,
      id: 104,
    },
  ]);

  // React는 state 함수의 호출이 일관성을 유지하기 위해서 내부적으로 동일한 내용의 state 함수 호출이 여러 번 반복되면 하나의 업데이트로 취급하여 처리한다.
  function handleClick(id) {
    // setDatas(
    //   datas.filter((item) => {
    //     return id !== item.id;
    //   })
    // );

    // 함수형 업데이트
    // 함수형 업데이트를 사용하면 함수의 인자로 전달되는 state 값을 React가 이전 state의 값으로 보장한다. 때문에 상태 업데이트가 비동기적으로 처리된다고 해도 안정적으로 이전 값과 이후 값(Virtual DOM)을 비교하여 처리할 수 있다.
    // setDatas 비동기로 동작, 비동기 함수의 실행 순서는 보장할 수 없다.
    setDatas((prevDatas) => {
      return prevDatas.filter((item) => {
        return id !== item.id;
      });
    });
  }

  return (
    <ul>
      {datas.map((item, idx) => {
        return (
          <li
            key={item.id}
            style={{ listStyle: "none" }}
          >
            <h2>
              {idx + 1} {item.title}
            </h2>
            <span>{`${item.price}원`}</span>
            {/* 리액트로 개발하고 있는데 개발의 일관성을 해친다, 리액트 방식대로 화면 업데이트를 하는게 맞다 */}
            {/* <button
              onClick={(event) => {
                event.target.closest("li").remove();
              }}
              type="button"
            >
              삭제
            </button> */}
            <button
              onClick={() => {
                handleClick(item.id);
              }}
              type="button"
            >
              삭제
            </button>
          </li>
        );
      })}
    </ul>
  );
}
