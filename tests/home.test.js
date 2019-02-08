import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Home from "../client/components/Home";

describe("Home should render button", () => {
  it("should render correctly", () => {
    const component = shallow(<Home />);

    expect(component).toMatchSnapshot();
  });
});
