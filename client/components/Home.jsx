import React, { Fragment, Component } from "react";
import { Redirect } from "react-router-dom";
import Button from "./Button";
import Music from "./Music";

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
      return <Redirect to="/form" />;
    }
  };
  render() {
    return (
      <Fragment>
        <Music />
        <div className="container">
          {this.renderRedirect()}
          <Button name={this.state.redirect} buttonClick={this.setRedirect} />
        </div>
      </Fragment>
    );
  }
}

export default Home;
