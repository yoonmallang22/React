import React, { useState } from "react";
import Detail from "./contents/Detail";
import Question from "./contents/Question";
import Review from "./contents/Review";

const ContentsContainer = ({ listName }) => {
  if (listName === "detail") {
    return <Detail />;
  } else if (listName === "qa") {
    return <Question />;
  } else if (listName === "review") {
    return <Review />;
  }
};

export default function NavBar() {
  const [listName, setListName] = useState("detail");

  const checkId = (e) => {
    setListName(e.target.id);
  };

  return (
    <>
      <nav>
        <ul>
          <li
            onClick={checkId}
            id="detail"
            style={listName === "detail" ? { color: "red" } : { color: "black" }}
          >
            상세정보
          </li>
          <li
            onClick={checkId}
            id="qa"
            style={listName === "qa" ? { color: "red" } : { color: "black" }}
          >
            Q&A
          </li>
          <li
            onClick={checkId}
            id="review"
            style={listName === "review" ? { color: "red" } : { color: "black" }}
          >
            Review
          </li>
        </ul>
      </nav>
      <ContentsContainer listName={listName} />
    </>
  );
}
