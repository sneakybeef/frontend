import React from "react";
import Joi from "joi-browser";
import Form from "../form/form";
class Loginform extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Benutzer"),
    password: Joi.string()
      .required()
      .label("Passwort")
  };

  doSubmit = () => {
    console.log("submitted");
  };

  render() {
    return (
      <div className="container-sm">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Benutzer", true)}
          {this.renderInput("password", "Passwort", false, "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default Loginform;
