import React from "react";
import Slider from "../slider/slider";
import { Link } from "react-router-dom/";

class Nav extends React.Component {
  render() {
    const { links } = this.props;

    return (
      <Slider>
        {links.map(link => (
          <Link style={{ padding: 20 }} key={link.name} to={link.url}>
            {link.name}
          </Link>
        ))}
        {this.props.children}
      </Slider>
    );
  }
}
export default Nav;
