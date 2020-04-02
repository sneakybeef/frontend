import React from "react";
import StepWizard from "react-step-wizard";
import LoginStep from "../loginStep/LoginStep";
import LoginStep2 from "../loginStep/LoginStep2";
import "./wizard.scss";

class Wizard extends React.Component {
  render() {
    return (
      <StepWizard className="wizard">
        <LoginStep />
        <LoginStep2 />
      </StepWizard>
    );
  }
}

export default Wizard;
