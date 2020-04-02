import React from "react";
import Joi from "joi-browser";
import Form from "../form/form";
import { tasks } from "../../data/data.json";
const fs = require("fs");

class AddTask extends Form {
  state = {
    tasks,
    data: { name: "", description: "", urgency: 0 },
    errors: {}
  };

  schema = {
    name: Joi.string()
      .required()
      .label("Benutzer"),
    description: Joi.string()
      .required()
      .label("Passwort"),
    urgency: Joi.string()
      .required()
      .label("Wichtigkeit")
  };

  doSubmit = () => {
    const { name, description, urgency } = this.state.data;
    console.log(name, description, urgency);
    const object = {
      name,
      description,
      urgency
    };
    console.log(object);

    fetch("http://localhost:4000/newTask", {
      /* global fetch:false */
      method: "POST",
      body: JSON.stringify(object),
      headers: { "Content-Type": "application/json" }
    });
  };

  render() {
    return (
      <div className="container-sm">
        <h1>New Task</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name", true)}
          {this.renderInput("description", "Beschreibung", false)}
          {this.renderInput("urgency", "Wichtigkeit", false, "range")}
          {this.renderButton("Add")}
        </form>
      </div>
    );
  }
}

export default AddTask;
