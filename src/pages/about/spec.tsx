import React from "react";
import { shallow } from "enzyme";

import About from "./index";

describe("About Page", () => {
  it("It should render", () => {
    const component = shallow(<About />);
    const wrapper = component.find(".aboutpage");
    expect(wrapper.length).toBe(1);
  });
});
