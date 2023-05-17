import React, { useContext } from "react";
import UserInfo from "./CreateContext";

export default function HelloTwo() {
  const { name, id } = useContext(UserInfo);
  return (
    <div>
      <h2>{id}</h2>
      <strong>{name}</strong>
    </div>
  );
}
