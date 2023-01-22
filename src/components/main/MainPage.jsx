import React from "react";
import Container from "../../short/Container";
import SubMenu from "../../short/SubMenu";
import "./MainPage.css";

function mainpage() {
  return (
    <React.Fragment>
      <div className="container1">
        <SubMenu />
      </div>
      <div>
        <div className="container">
          <Container />
          <Container />
          <Container />
          <Container />
        </div>

        <div>
          
        </div>
      </div>
    </React.Fragment>
  );
}

export default mainpage;
