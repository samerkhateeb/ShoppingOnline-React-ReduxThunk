import Header from "../containers/Header";
import React from "react";

function Layouts(props) {
  return (
    <React.Fragment>
      <div>
        <Header />
        <main>{props.children}</main>
      </div>
    </React.Fragment>
  );
}

export default Layouts;
