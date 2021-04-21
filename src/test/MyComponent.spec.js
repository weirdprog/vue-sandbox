/* global describe it expect */
import { mount } from "vue-test-utils";
import MyComponent from "@/components/MyComponent.vue";

describe("MyComponentTest.vue", () => {
  it("html matches", () => {
    const wrapper = mount(MyComponent);
    expect(wrapper.html()).toBe(
      "<div><table><thead><tr><th>Column 1</th></tr></thead><tbody><tr><td>Test Data</td></tr></tbody></table></div>"
    );
  });

  it("table exists", () => {
    const wrapper = mount(MyComponent);
    expect(wrapper.find("table").exists()).toBe(true);
  });
});
