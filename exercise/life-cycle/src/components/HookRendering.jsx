import React, { useEffect, useLayoutEffect, useState } from "react";

function Rendering() {
  const [num, setNum] = useState(0);

  const handleonClick = () => setNum(num + 1);

  useLayoutEffect(() => {
    console.log("useLayoutEffect 1");
    return () => {
      console.log("useLayoutEffect return_1");
    };
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect 2");
    return () => {
      console.log("useLayoutEffect return_2");
    };
  });

  useLayoutEffect(() => {
    console.log("useLayoutEffect 3");
    return () => {
      console.log("useLayoutEffect return_3");
    };
  }, [num]);

  // useLayoutEffect가 모두 끝난 후에야 브라우저에 그려주기 시작한다

  useEffect(() => {
    console.log("useEffect 1");
    return () => {
      console.log("useEffect return_1");
    };
  }, []);

  useEffect(() => {
    console.log("useEffect 2");
    return () => {
      console.log("useEffect return_2");
    };
  });

  useEffect(() => {
    console.log("useEffect 3");
    return () => {
      console.log("useEffect return_3");
    };
  }, [num]);

  return <button onClick={handleonClick}>{num}</button>;
}

export default function HookRendering() {
  const [isVisible, setIsVisible] = useState(true);
  const handleClick = () => setIsVisible(!isVisible);
  return (
    <div>
      <br />
      <div>Hook rendering</div>
      <button onClick={handleClick}>{isVisible ? "언마운트시키기" : "마운트시키기"}</button>
      <br></br>
      {isVisible && <Rendering />}
    </div>
  );
}
