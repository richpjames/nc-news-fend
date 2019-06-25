import React from "react";

export default function TopicHeaderArea(props) {
  return (
    <div>
      <ul style={{ float: "left" }}>
        {props.topics.map(topic => (
          <li key={topic.slug}>{topic.slug}</li>
        ))}
      </ul>
    </div>
  );
}
