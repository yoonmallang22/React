import { useEffect, useState } from "react";

export default function useScrollCheck() {
  const [isBottom, setIsBottom] = useState(false);
  // console.log(isBottom);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log("scrollTop: " + document.documentElement.scrollTop); // 스크롤 내린 높이
      // console.log("scrollHeight: " + document.documentElement.scrollHeight); // 콘텐츠의 높이
      // console.log("innerHeight: " + window.innerHeight); // 현재 뷰포트의 높이
      // 바닥 도착 = 스크롤 다 내린 높이 + 전체 뷰포트 높이
      // console.log(document.documentElement.scrollTop + window.innerHeight);

      setIsBottom(Math.ceil(document.documentElement.scrollTop + window.innerHeight) + 20 >= document.documentElement.scrollHeight);
    });
  }, []);

  return isBottom;
}
