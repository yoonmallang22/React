import React, { createContext } from "react";

const UserInfo = createContext();

export default function Context() {
  return (
    <div style={{ border: "1px solid black" }}>
      context API
      <UserInfo.Provider
        value={{
          name: "jisoo",
          id: "mallang",
        }}
      >
        <Hello />
      </UserInfo.Provider>
    </div>
  );
}

const Hello = () => {
  return (
    <UserInfo.Consumer>
      {(value) => {
        return (
          <div>
            <h2>{value.id}</h2>
            <strong>{value.name}</strong>
            <HelloTwo />
          </div>
        );
      }}
    </UserInfo.Consumer>
  );
};

const HelloTwo = () => {
  return (
    <UserInfo.Consumer>
      {(value) => {
        return (
          <div>
            <h2>Two : {value.id}</h2>
            <strong>Two : {value.name}</strong>
          </div>
        );
      }}
    </UserInfo.Consumer>
  );
};
