import { Component } from "react";

class Message extends Component {
    render() {  
        console.log(this.props);
        <br/>
    return <h1> 
        Message Content : { this.props.MessageContent }
        <br/>
        Message Code : { this.props.MessageCode }
        
        </h1>;
    }
}

export default   Message;