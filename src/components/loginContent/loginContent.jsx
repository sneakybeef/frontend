import React from "react";
import Wizard from "../wizard/wizard";
import Header from "../header/header";

class LoginContent extends React.Component {
  render() {
    const links = [{ name: "home", url: "/" }];
    return (
      <React.Fragment>
        <Header links={links} />
        <Wizard />
      </React.Fragment>
    );
  }
}

export default LoginContent;
