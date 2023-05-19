import React, { useEffect, useState, useLayoutEffect } from "react";

export default function UseEffectUseLayoutEffect() {
  const [value, setValue] = useState(100);

  // 1. 커져라 버튼을 클릭한다. setValue가 실행되면서 상태값을 변경한다.
  // 2. value 값이 변경(1000)되면서 컴포넌트를 재렌더링한다. 연결된 파란 상자의 스타일이 변경된다.
  // 3. 렌더링이 끝나고 value 값이 변한 것을 감지한 useEffect가 실행된다.
  // 4. setValue가 실행되면서 value 값을 또 변경(300)한다.
  // 5. 컴포넌트가 재렌더링 되면서 파란 상자의 스타일이 변경된다.

  useEffect(() => {
    if (value >= 1000) {
      setValue(300);
    }
  }, [value]);

  // 1. 커져라 버튼을 클릭한다. setValue가 실행되면서 상태값을 변경한다.
  // 2. value 값이 변경(1000)되면서 컴포넌트를 재렌더링하기 전에 useLayoutEffect가 실행된다.
  // 3. setValue가 실행되면서 value 값을 또 변경(300)한다.
  // 4. 컴포넌트가 재렌더링 되면서 파란 상자의 스타일이 변경된다.

  // useLayoutEffect(() => {
  //   if (value >= 1000) {
  //     setValue(300);
  //   }
  // }, [value]);

  return (
    <div>
      <br />
      <div>useEffect, useLayoutEffect</div>
      <div style={{ width: value, height: value, backgroundColor: "blue" }}></div>
      <button
        onClick={() => {
          setValue(1000);
        }}
      >
        커져랏!
      </button>
      <button
        onClick={() => {
          setValue(200);
        }}
      >
        작아져랏!
      </button>
    </div>
  );
}
