import React from "react";

import Footer from "../footer/footer";
import Middle from "../middle/middle";
import Header from "../header/header";

const StartContent = () => {
  const links = [
    { name: "home", url: "/" },
    { name: "form", url: "/form" },
    { name: "login", url: "login" },
    { name: "register", url: "/register" },
    { name: "Tasks", url: "/tasks" },
    { name: "checklist", url: "/checklist" }
  ];
  return (
    <div className="container">
      <Header links={links} />
      <Middle />
      <Footer />
    </div>
  );
};

export default StartContent;
