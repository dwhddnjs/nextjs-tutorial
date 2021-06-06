import { Header } from "semantic-ui-react";
import React from "react";
import Gnb from "./Gnb";

function Top() {
  return (
    <div>
      <div style={{ display: "felx", paddingTop: 20 }}>
        <div style={{ display: "flex" }}>
          <img
            src="/images/ca.png"
            alt="log"
            style={{ display: "block", width: 80, marginRight: 10 }}
          />
          <Header as="h1">쀼띠쓰</Header>
        </div>
      </div>
      <Gnb />
    </div>
  );
}

export default Top;
