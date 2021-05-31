import { shallowMount } from "@vue/test-utils";
import Nav from "@/components/Nav.vue";

// describe("HelloWorld.vue", () => {
//   it("renders props.msg when passed", () => {
//     const msg = "new message";
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg },
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });

describe("nav", () => {
  test("boton", () => {
    const wrapper = shallowMount(Nav);
    const carro = wrapper.find(".carroIcono");
    console.log(carro);
    console.log(carro.exists());
  });
});
