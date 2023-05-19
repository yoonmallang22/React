import React from "react";
import ImgItem from "./ImgItem";

export default function ImgList({ imageList }) {
  return (
    <ul>
      {imageList.map((item) => {
        return (
          <li key={item.id}>
            <ImgItem img={item} />
          </li>
        );
      })}
    </ul>
  );
}
