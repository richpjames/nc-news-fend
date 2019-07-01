import React from "react";

export default function ErrorPage(props) {
  const { errMsg } = props;
  return (
    <div>
      <h1>Error</h1>
      <p>{errMsg}</p>
    </div>
  );
}
