import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Form from "../client/components/Form";

describe("Form should render", () => {
  it("should render correctly", () => {
    const component = shallow(<Form />);

    expect(component).toMatchSnapshot();
  });
});
