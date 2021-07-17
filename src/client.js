import react, { Component } from "react";
import logo from "./logo.svg";
import "./Main.css";

class Client extends Component {
    constructor(props) {
        super(props);
        this.state = {
            polls: ""
        };
    }

    callAPI() {
        //fetch("http://localhost:9000/auth/login")
        //    .then(res => res.text())
        //    .then(res => this.setState({ token: res }));

        fetch("http://localhost:9000/poll/get/tokenuser0")
            .then(res => res.text())
            .then(res => this.setState({ polls: res }));
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="Client">
                <p className="App-intro">{this.state.polls}</p>
            </div>
        );
    }
}

export default Client