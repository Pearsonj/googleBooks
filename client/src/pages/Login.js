import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""

        }
    }

    login = () => {
        axios.post("/api/auth/login", {username: this.state.username, password: this.state.password}).then(response => {
            console.log(response);
        });
    }

  render() {
      console.log(this.state.username);
    return (
        <div>
            I am a Login
            <input name="username" onChange={(e) => this.setState({username: e.target.value})} value={this.state.username}></input>
            <input name="password" onChange={(e) => this.setState({password: e.target.value})} value={this.state.password}></input>
            <button onClick={this.login}>button</button>
        </div>
    );
  }
}

export default Login;
