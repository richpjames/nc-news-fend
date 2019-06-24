import React from "react";

export default function TopicHeaderArea(props) {
  return (
    <div>
      <ul style={{ float: "left" }}>
        {props.topics.map(topic => (
          <li>{topic}</li>
        ))}
      </ul>
    </div>
  );
}
