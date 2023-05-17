import { useContext, createContext } from "react";

const UserInfo = createContext({ name: "jisoo", id: "mallang" });

const UseContext = () => {
  return <Hello />;
};
const Hello = () => {
  const { name, id } = useContext(UserInfo);
  return (
    <div style={{ border: "1px solid black" }}>
      useContext
      <h2>{name}</h2>
      <strong>{id}</strong>
      <HelloTwo />
    </div>
  );
};

const HelloTwo = () => {
  const { name, id } = useContext(UserInfo);
  return (
    <div>
      <h2>{name}</h2>
      <strong>{id}</strong>
    </div>
  );
};

export default UseContext;
