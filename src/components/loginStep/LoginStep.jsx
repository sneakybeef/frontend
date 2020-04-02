
import React from "react"
import LoginForm from "../loginForm/loginForm"
class LoginStep extends React.Component
{
    render()
    {
    return(<div>
    <h1>Step {this.props.currentStep}</h1>
        <LoginForm/>
        <button onClick={this.props.nextStep}>Next</button>
        </div>
        )
    }
}
export default LoginStep;