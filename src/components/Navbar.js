import { Component } from "react";
import "./NavbarStyles.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        {/* <h1>This is Navbar</h1> */}
        <nav>
          <a href="#">
            {" "}
            <img src="./images/mj_helpline_box2.png"></img>{" "}
          </a>

          <div>
            <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
              <li>
                <a className="active" href="index.html">
                  হোম
                </a>
              </li>
              <li>
                <a href="index.html">মানিকগঞ্জ</a>
              </li>
              <li>
                <a href="index.html">গ্যালারী</a>
              </li>
              <li>
                <a href="index.html">অন্যান্য</a>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </nav>
      </>
    );
  }
}
export default Navbar;
