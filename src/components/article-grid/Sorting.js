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
  -webkit-box-shadow: 3px 3px 0px 1px #f2dde6;
  -moz-box-shadow: 3px 3px 0px 1px #f2dde6;
  box-shadow: 3px 3px 0px 1px #f2dde6;
  @media (max-width: 768px) {
    width: 85%;
    box-shadow: 0px 0px 0px 0px #fff;
  }
`;

export default function Sorting(props) {
  return (
    <SortingWrap>
      <h4>Sort By:</h4>
      <br />
      <form onChange={props.dropDownSubmit}>
        <select name="sort-by">
          <option value="created_at">Date Created</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
      </form>
    </SortingWrap>
  );
}
