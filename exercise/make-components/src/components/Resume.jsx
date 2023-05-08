import React, { useState } from "react";

export default function Resume(props) {
  const [like1, setLike1] = useState(0);
  // console.log(useState(0));

  function clickLike1() {
    setLike1(like1 + 1);
    // console.log(like1);
  }

  const [like2, setLike2] = useState("");

  function clickLike2() {
    if (like2 === "") {
      setLike2("Like");
    } else {
      setLike2("");
    }
  }

  return (
    <>
      <h2>{props.name} 자기소개서</h2>
      <strong>{props.hello}</strong>
      <dl>
        <dt>취미 :</dt>
        <dd>{props.hobby}</dd>
        <dt>좋아하는 음식 :</dt>
        <dd>{props.food}</dd>
        <dt>좋아하는 색 :</dt>
        <dd style={{ color: props.color }}>{props.color}</dd>
      </dl>
      <button onClick={clickLike1}>like1</button> <span>{like1}</span><br/>
      <button onClick={clickLike2}>like2</button> <span>{like2}</span>
    </>
  );
}
