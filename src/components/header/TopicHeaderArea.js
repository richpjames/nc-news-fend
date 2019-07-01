import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

export default function TopicHeaderArea(props) {
  const TopicLinkWrapper = styled.span`
    border: 1px solid #6fb1fc;
    padding: 0.5em;
    width: 100%;

    :hover {
      border: 1px solid #fff;
    }
    :active {
      background: #cae2fd;
      color: #cae2fd;
    }
  `;

  return (
    <nav>
      <ul>
        {props.topics.map(topic => (
          <TopicLinkWrapper key={topic.slug}>
            <Link to={`/topics/${topic.slug}`}>
              <li>{topic.slug}</li>
            </Link>
          </TopicLinkWrapper>
        ))}
        <TopicLinkWrapper>
          <Link to="/">
            <li>view all articles</li>
          </Link>
        </TopicLinkWrapper>
      </ul>
    </nav>
  );
}
