import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

export default function TopicHeaderArea(props) {
  const NavListWrapper = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    width: 75%;
    padding: 0;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.1em;

    h3 {
      text-decoration: underline;
    }
  `;

  const TopicOuterWrapper = styled.span``;

  const TopicItemWrapper = styled.li`
    width: 15vw;
    padding-top: 0.5vh;
    padding-bottom: 0.5vh;
    border: 1px solid #6fb1fc;
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
      <NavListWrapper>
        <h3>Topics:</h3>
        {props.topics.map(topic => (
          <TopicOuterWrapper key={topic.slug}>
            <Link to={`/topics/${topic.slug}`}>
              <TopicItemWrapper>{topic.slug}</TopicItemWrapper>
            </Link>
          </TopicOuterWrapper>
        ))}
        <TopicOuterWrapper>
          <Link to="/">
            <TopicItemWrapper>view all articles</TopicItemWrapper>
          </Link>
        </TopicOuterWrapper>
      </NavListWrapper>
    </nav>
  );
}
