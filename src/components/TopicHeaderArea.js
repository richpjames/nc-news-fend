import React from "react";
import { Link } from "@reach/router";

export default function TopicHeaderArea(props) {
  return (
    <div>
      <ul>
        {props.topics.map(topic => (
          <Link to={`/topics/${topic.slug}`} key={topic.slug}>
            <li>{topic.slug}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
