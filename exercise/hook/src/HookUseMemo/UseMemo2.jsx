import React, { useRef, useState, useMemo } from "react";

export default function UseMemo2() {
  // const inputName = useRef(null);
  // const inputId = useRef(null);
  const [userInfo, setUserInfo] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  function handleInputName(e) {
    console.log(e);
    setName(e.target.value);
    console.log("렌더링 - 1");
  }

  function handleInputId(e) {
    console.log(e);
    setId(e.target.value);
    console.log("렌더링 - 2");
  }

  function handleSubmit(e) {
    console.log(e);
    e.preventDefault();
    const newInfo = [...userInfo, { name, id }];
    setUserInfo(newInfo);
    // inputName.current.value = "";
    // inputId.current.value = "";
    setName("");
    setId("");
    // inputName.current.focus();
    e.target[0].focus();
    console.log("렌더링 - 3");
  }

  // 모든 렌더링에 함께 렌더링되는 이슈가 있다
  function getNum(li) {
    console.log("렌더링!");
    return li.length;
  }

  // 상태가 바뀌었는지 확인하고 렌더링 전에 실행되어 저장(메모이제이션)된 것을 반환한다
  const num = useMemo(() => {
    return getNum(userInfo);
  }, [userInfo]);

  return (
    <>
      {/* onClick 대신 onSubmit 사용하면 target 프로퍼티로 form 안의 요소에 접근할 수 있다 cf) e.target[0].focus();*/}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          onChange={handleInputName}
          value={name}
          // ref={inputName}
        />
        <input
          type="text"
          placeholder="아이디를 입력하세요"
          onChange={handleInputId}
          value={id}
          // ref={inputId}
        />
        {/* <button type="submit" onClick={handleSubmit}>회원 명부 작성</button> */}
        <button type="submit">회원 명부 작성</button>
      </form>
      <ul>
        {userInfo.map((value, index) => (
          <li key={index}>
            <h3>이름 : {value.name}</h3>
            <strong>아이디 : {value.id}</strong>
          </li>
        ))}
      </ul>
      <span>현재 회원 수 : {num}</span>
    </>
  );
}
