import React from "react";
import styled from "styled-components";

const SortingWrap = styled.section`
  border: 2px solid #eccbd9;
  border-radius: 25px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 1em;
  padding-top: 1em;
  background: #b0d4fd;

  @media (max-width: 768px) {
    width: 85%;
  }
`;

export default function Sorting(props) {
  const { dropDownSubmit } = props;
  return (
    <SortingWrap>
      <h4>Sort By:</h4>
      <br />
      <form onChange={dropDownSubmit}>
        <select className="" name="sort-by" size="1">
          <option value="created_at" name="date created">
            Date Created
          </option>
          <option value="comment_count" name="comment count">
            Comment Count
          </option>
          <option value="votes" name="votes">
            Votes
          </option>
        </select>
      </form>
    </SortingWrap>
  );
}
