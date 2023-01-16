import "./Navbar.css";
import React from "react";
import { Component } from "react";

class Navbar extends Component {
  state = { clicked: false };
  clickHandler = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <React.Fragment>
        <header className="navbarheader">
          <nav>
            <a href="#">
              <img
                className="spotify-logo"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Ffull%2F190-1907978_spotify-logo-png-white-spotify-logo-white-transparent.png&f=1&nofb=1&ipt=ceacceea7d409fd50399617dca737de23231fce32f765cf9dca4f082dfec8c9f&ipo=images"
              />
            </a>
            <div>
              <ul
                id="navbar"
                className={this.state.clicked ? "#navbar active" : "#navbar"}
              >
                <li>
                  <a href="index.html">Premium</a>
                </li>
                <li>
                  <a href="index.html">Support</a>
                </li>
                <li>
                  <a href="index.html">Download</a>
                </li>
                <li>
                  <a href="index.html">Sign up</a>
                </li>
                <li>
                  <a href="index.html">Log in</a>
                </li>
              </ul>
            </div>
            <div id="mobile" onClick={this.clickHandler}>
              <i
                id="bar"
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default Navbar;
