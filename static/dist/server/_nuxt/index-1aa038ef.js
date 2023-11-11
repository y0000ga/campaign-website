import { ref, defineComponent, watch, reactive, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { d as defineStore, s as storeToRefs } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "devalue";
import "defu";
import "klona";
import "unhead";
import "@unhead/shared";
import "h3";
import "ufo";
import "@vue/devtools-api";
const useStore = defineStore("main", () => {
  const count = ref(0);
  const addNum = ({ addedNum }) => {
    count.value = count.value + addedNum;
  };
  const asyncAddNum = async ({ addedNum }) => {
    setTimeout(() => {
      count.value = count.value + addedNum;
    }, 2e3);
    console.log("async");
  };
  return { count, addNum, asyncAddNum };
});
const useStore$1 = useStore;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const added = ref(null);
    const store = useStore$1();
    watch(() => [added.value], () => {
      console.log(added.value);
    });
    const { count } = storeToRefs(store);
    const route = useRoute();
    const user = reactive({ firstName: "abc", lastName: "eee" });
    const { id } = route.params;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}> Activity Id${ssrInterpolate(user.firstName)}${ssrInterpolate(user.lastName)}${ssrInterpolate(unref(id))} Counter: ${ssrInterpolate(unref(count))} <input${ssrRenderAttr("value", added.value)} type="number"><button>add</button><button>async Add</button></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/activity/[id]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-1aa038ef.js.map
