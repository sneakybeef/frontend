import React from "react";


class TestButton extends React.Component
{
    
    render()
    {
        return(<button onClick={this.props.onClick}>{this.props.value}</button>)
    }
}

export default TestButton;