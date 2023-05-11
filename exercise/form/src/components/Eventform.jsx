import React, { useState } from "react";
import "./Eventform.css";

export default function Eventform({ addData }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [food, setFood] = useState("짜장면");

  function resetForm() {
    setTitle("");
    setDate("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      id: Math.floor(Math.random() * 10000),
      title: title,
      date: date,
      food: food,
    };
    // console.log(formData);

    addData(formData);
    resetForm();
  }

  return (
    <form
      className="event-form"
      onSubmit={handleSubmit}
    >
      <label>
        <strong>Event Title :</strong>
        <input
          type="text"
          // input의 값을 변경하려면 반드시 setState 함수를 사용해야 한다 = 리액트가 관리하게 만든다
          // 신뢰 가능한 단일 출처의 원칙
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </label>
      <label>
        <strong>Event date :</strong>
        <input
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </label>
      <select
        onChange={(e) => {
          setFood(e.target.value);
        }}
      >
        <option value="짜장면">짜장면</option>
        <option value="유산슬">유산슬</option>
        <option value="탕수육">탕수육</option>
      </select>
      <button type="submit">제출하기</button>
      <button
        type="reset"
        onClick={resetForm}
      >
        초기화하기
      </button>
    </form>
  );
}
