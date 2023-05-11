import { useState } from "react";
import Eventform from "./components/Eventform";
import ItemGenerator from "./components/ItemGenerator";

function App() {
  const [datas, setDatas] = useState([]);

  // datas 배열에 data를 추가하는 목적을 가진 함수
  const addData = (data) => {
    setDatas([...datas, data]);
  };
  // console.log(datas);

  return (
    <div>
      <ItemGenerator datas={datas} />
      <Eventform addData={addData} />
    </div>
  );
}
export default App;
