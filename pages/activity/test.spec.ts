import { mount } from '@vue/test-utils';
import Activity from './index.vue'

Object.defineProperties(global, {
  definePageMeta: { value: vi.fn() },
  useSeoMeta: { value: vi.fn() },
});

describe('my describe', () => {
  it('test', () => {
    const wrapper = mount(Activity);
    console.log(wrapper.html());
  });
});