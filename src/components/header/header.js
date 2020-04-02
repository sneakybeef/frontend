import React from "react";
import Nav from "../nav/nav";

class Header extends React.Component {
  render() {
    const { links } = this.props;
    return (
      <div className="header">
        <Nav links={links}>{this.props.children}</Nav>
      </div>
    );
  }
}
export default Header;
