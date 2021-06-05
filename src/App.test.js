// test file
import { shallow, mount, render } from "enzyme";
import App from "./App";

const wrapper = shallow(<App />);

describe("<App />", () => {
  test("renders learn react link", () => {
    // hello
    expect(wrapper.find(".App").text()).toBe("Hello world");
    console.log(wrapper.debug());
  });
});
