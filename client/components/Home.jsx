import React, { Fragment, Component } from "react";
import React from "react";
import { Redirect } from "react-router-dom";
import Button from "./Button";

class Home extends Component {
  state = {
    redirect: false
  };
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="https://www.google.com" />;
    }
  };
  render() {
    return (
      <Fragment>
        <div className="container">
          <h1>PROJECT EVE</h1>
          {this.renderRedirect()}
          <Button name={this.state.redirect} buttonClick={this.setRedirect} />
          )}
        </div>
      </Fragment>
    );
  }
}

export default Home;
