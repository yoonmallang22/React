import React from "react";
import "./MenuListItem.css";

// props drilling
export default function MenuListItem(props) {
  const onItemClick = () => {
		// 상태 끌어올리기
    props.onClickEvt(props.mood);
  };

  const getBgColor = () => {
    if (props.isSelected) {
      return "skyblue";
    }
  };

  return (
    <li>
      <button
        className="btn-item"
        onClick={onItemClick}
        style={{ backgroundColor: getBgColor() }}
      >
        기분이 {props.mood}
      </button>
    </li>
  );
}
