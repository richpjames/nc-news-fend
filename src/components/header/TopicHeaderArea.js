import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

export default function TopicHeaderArea(props) {
  const TopicLinkWrapper = styled.span`
    border: 1px solid #6fb1fc;
    padding: 0.5em;
  `;
  return (
    <div>
      <ul>
        {props.topics.map((topic, i) => (
          <TopicLinkWrapper key={topic.slug}>
            <Link to={`/topics/${topic.slug}`}>
              <li>{topic.slug}</li>
            </Link>
          </TopicLinkWrapper>
        ))}
      </ul>
    </div>
  );
}
