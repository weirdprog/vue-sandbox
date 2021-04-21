/* global describe it expect */

import { mount } from "vue-test-utils";
import SlotWrapper from "@/components/SlotWrapper.vue";
import SlotItem from "@/components/SlotItem";

describe("MessageToggle.vue", () => {
  it("toggles msg passed to Message when button is clicked", () => {
    const wrapper = mount(SlotWrapper, {
      slots: {
        default: [SlotItem, SlotItem]
      }
    });

    expect(wrapper.html()).toBe(
      `<div class="slot-wrapper"><div class="slot-item"></div><div class="slot-item"></div></div>`
    );
  });

  // it("toggles msg passed to Message when button is clicked", () => {
  //   const wrapper = mount(SlotWrapper, {
  //     slots: {
  //       default: [<SlotItem />, <SlotItem />]
  //     }
  //   });

  //   expect(wrapper.html()).toBe(
  //     `<div class=\"slot-wrapper\"><div class=\"slot-item\"></div><div class=\"slot-item\"></div></div>`
  //   );
  // });
});
