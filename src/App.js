import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import { connect } from "react-redux";

import updateData from "./redux/actions/testActions";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">
              Welcome to React, with <a href="https://webpack.js.org/concepts/hot-module-replacement/">HMR</a>
            </h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save <s>to reload.</s>
          </p>
          <div>
            <button onClick={() => this.props.updateData(100)}>Update data</button>
            <hr />
            <code
              style={{
                background: "rgb(239, 239, 239)",
                color: "#d65c5c",
                display: "inline-block",
                padding: "14px",
                width: "60%",
              }}
            >
              {this.props.data}
            </code>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapState = state => ({
  data: state.test.data,
});

const mapDispatchToProps = dispatch => ({
  updateData: value => dispatch(updateData(value)),
});

export default connect(mapState, mapDispatchToProps)(App);
