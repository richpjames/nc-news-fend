import React from "react";
import LinksArea from "./LinksArea";
import TopicHeaderArea from "./TopicHeaderArea";
import LoggedInArea from "./LoggedInArea";

export default function Header(props) {
  return (
    <div>
      <TopicHeaderArea topics={props.topics} />
      <h1>NC News</h1>
      <LoggedInArea />
      <LinksArea />
    </div>
  );
}
