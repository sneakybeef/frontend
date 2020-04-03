import React  from "react";
import Form from "../form/form";
import Joi from "joi-browser";
class Register extends Form {
  state = {
    data: { email: "", name: "", password: "" },
    errors: {}
  };
  schema = {
    email: Joi.string()
      .email({ minDomainSegments: 2 })
      .required(),
    name: Joi.string()
      .required()
      .label("Benutzer"),
    password: Joi.string()
      .required()
      .label("Passwort")
  };
  onSubmit = () => {
    console.log("registered");
  };
  render() {
    return (
      <div className="container-sm">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email", true, "email")}
          {this.renderInput("name", "Name", false, "text")}
          {this.renderInput("password", "Passwort", false, "password")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
