import { Header } from "semantic-ui-react";
import React from "react";
import Gnb from "./Gnb";

function Top() {
  return (
    <div>
      <div style={{ display: "felx", paddingTop: 20 }}>
        <div style={{ display: "flex" }}>
          <img
            src="/images/di.png"
            alt="log"
            style={{ display: "block", width: 80, marginRight: 10 }}
          />
        </div>
      </div>
      <Gnb />
    </div>
  );
}

export default Top;
