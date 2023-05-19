import { useEffect, useState } from "react";
import ImgList from "./components/ImgList";
import useScrollCheck from "./hooks/useScrollCheck";
import Loading from "./components/Loading";

function App() {
  const [imageList, setImageList] = useState([]);
  const [fetchPage, setFetchPage] = useState(1);
  const isBottom = useScrollCheck();
  // console.log("바닥인가? ", useScrollCheck());
  const [isLoading, setIsLoading] = useState(false);
  // console.log("로딩중인가? ", isLoading);

  useEffect(() => {
    fetchImages();
  }, [fetchPage]);

  useEffect(() => {
    if (isBottom) {
      setFetchPage((prevPage) => {
        return prevPage + 1;
      });
    }
  }, [isBottom]);

  async function fetchImages() {
    setIsLoading(true);
    try {
      const response = await fetch(`https://picsum.photos/v2/list?page=${fetchPage}&limit=5`);

      if (!response.ok) {
        throw new Error("네트워크의 문제가 있습니다.");
      }

      const data = await response.json();

      setImageList((prevImg) => {
        return [...prevImg, ...data];
      });

      setIsLoading(false);
    } catch (error) {
      console.log("데이터를 가져오는데 문제가 생겼습니다", error);

      setIsLoading(false);
    }
  }

  return (
    <div>
      무한 스크롤
      <ImgList imageList={imageList} />
      {isLoading && <Loading />}
    </div>
  );
}
export default App;
