import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import Header from "./Components/Header";
import routes from "./routes";
import Footer from "./Components/Footer";
import "./styles/auth.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <main className="App">
          <div className="bg" />

          <Header />
          {routes}
          <Footer />
        </main>
      </HashRouter>
    );
  }
}

export default App;
