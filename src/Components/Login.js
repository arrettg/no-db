import React from "react";
// import app from "../firebaseConfig";
import { Link, Redirect } from "react-router-dom";
import "../styles/auth.css";
import axios from "axios";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  handleRegister = e => {
    const body = {
      email: this.state.email,
      password: this.state.password
    };

    axios.post("/auth/register", body).then(res => {
      this.setState({ id: res.data.id });
    });
  };
  handleSignIn = e => {
    const body = {
      email: this.state.email,
      password: this.state.password
    };

    axios.post("/auth/login", body).then(res => {
      this.setState({ id: res.data.id });
    });
  };
  handleChangeemail = e => {
    this.setState({ email: e.target.value });
  };
  handleChangepassword = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <div className="auth">
        {this.state.id ? <Redirect to="/recipes" /> : null}
        <h1>Sign In</h1>
        <input
          onChange={this.handleChangeemail}
          placeholder="email"
          name="email"
        />
        <input
          onChange={this.handleChangepassword}
          placeholder="password"
          name="password"
        />

        <button onClick={this.handleSignIn}>Login</button>
        <p>or </p>
        <button onClick={this.handleRegister}>Register</button>
      </div>
    );
  }
}
