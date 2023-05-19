import React from "react";

export default function ImgItem({ img }) {
  return (
    <img
      style={{ width: 400, height: 300 }}
      src={img.download_url}
      alt=""
    />
  );
}
