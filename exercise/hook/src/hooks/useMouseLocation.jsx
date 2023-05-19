import { useEffect, useState } from "react";

export default function useMouseLocation(initVal) {
  const [mouseLocation, setMouseLocation] = useState(initVal || { x: 0, y: 0 });

  // 이벤트를 useEffect 안에서 많이 활용한다
  // 이벤트를 제거하고 싶을 때는 클린업 함수를 사용한다
  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      // console.log(event);
      setMouseLocation({ x: event.x, y: event.y });
    });
  }, []);

  // console.log(mouseLocation);

  return mouseLocation;
}
