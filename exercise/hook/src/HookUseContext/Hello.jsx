import React, { useContext } from "react";
import UserInfo from "./CreateContext";
import HelloTwo from "./HelloTwo";

export default function Hello() {
  const { name, id } = useContext(UserInfo);
  return (
    <div style={{ border: "1px solid black" }}>
      useContext 파일분리
      <h2>{id}</h2>
      <strong>{name}</strong>
      <HelloTwo />
    </div>
  );
}
