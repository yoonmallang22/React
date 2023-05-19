import React from "react";
import useInput from "../hooks/useInput";

function InputComponent() {
  const [value, onChange] = useInput("");

  return (
    <>
      <input
        type="text"
        onChange={onChange}
      />
      <div>{value}</div>
    </>
  );
}

function SomethingComponent() {
  const [value, onChange] = useInput("");

  return (
    <>
      <input
        type="text"
        onChange={onChange}
      />
      <div>{value}가 강해졌다 돌격해!</div>
    </>
  );
}

export default function CustomHook() {
  return (
    <div>
      <br />
      <div>Custom Hook</div>
      <InputComponent />
      <SomethingComponent />
    </div>
  );
}
