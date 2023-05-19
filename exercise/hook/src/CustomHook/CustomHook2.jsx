import React from "react";
import useMouseLocation from "../hooks/useMouseLocation";

export default function CustomHook2() {
  const location = useMouseLocation();

  return <div style={{ width: 100, height: 100, backgroundColor: location.y > 300 ? "royalblue" : "hotpink" }}>TestBox</div>;
}
