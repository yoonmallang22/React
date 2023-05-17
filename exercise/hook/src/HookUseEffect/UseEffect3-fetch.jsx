import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Item = styled.div`
  margin: 60px auto;

  ul {
    padding: 10px;
  }

  li {
    list-style: none;
    padding: 10px;
    margin: 20px 0;
    border: 1px solid black;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export default function UseEffectFetch() {
  const [nations, setNations] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/nations");

  // useEffect(() => {
  //   fetch("http://localhost:3000/nations")
  //     .then((response) => {
  //       // http 상태코드가 200번대가 아닐 경우
  //       if (!response.ok) {
  //         throw new Error("네트워크 응답에 문제가 있습니다.");
  //       }
  //       return response.json();
  //     })
  //     .then((json) => setNations(json))
  //     .catch((e) => console.error("데이터를 가져오는데 문제가 발생했습니다: ", e));
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("네트워크 응답에 문제가 있습니다.");
        }

        const json = await response.json();

        setNations(json);
      } catch (e) {
        console.error("데이터를 가져오는데 문제가 발생했습니다: ", e);
      }
    };

    fetchData();
  }, [url]);

  console.log(nations);

  return (
    <Item>
      <h2>나라 목록</h2>
      <ul>
        {nations.map((nation) => {
          return (
            <li key={nation.id}>
              <h3>나라 이름: {nation.title}</h3>
              <p>인구 수: {nation.population}</p>
            </li>
          );
        })}
      </ul>
      <div>
        <button
          onClick={() => {
            // 쿼리스트링 ?loc=Europe
            setUrl("http://localhost:3000/nations?loc=Europe");
          }}
        >
          유럽 목록
        </button>
        <button
          onClick={() => {
            setUrl("http://localhost:3000/nations");
          }}
        >
          전체 목록
        </button>
      </div>
    </Item>
  );
}
