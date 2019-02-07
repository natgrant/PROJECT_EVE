import React, { Fragment, Component } from "react";
import Button from "./Button";

class Home extends Component {
  state = {
    button: true
  };
  click = () => {
    this.setState({
      button: false
    });
  };
  render() {
    return (
      <Fragment>
        <div className="container">
          {this.state.button == true && (
            <Button name={this.state.button} buttonClick={this.click} />
          )}
        </div>
      </Fragment>
    );
  }
}

export default Home;
