import { ref, defineComponent, watch, reactive, unref, useSSRContext } from 'file://C:/Users/shius/Desktop/campaign-website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'file://C:/Users/shius/Desktop/campaign-website/node_modules/vue/server-renderer/index.mjs';
import { useRoute } from 'file://C:/Users/shius/Desktop/campaign-website/node_modules/vue-router/dist/vue-router.node.mjs';
import { d as defineStore, s as storeToRefs } from '../server.mjs';
import 'file://C:/Users/shius/Desktop/campaign-website/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/shius/Desktop/campaign-website/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/shius/Desktop/campaign-website/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/shius/Desktop/campaign-website/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/shius/Desktop/campaign-website/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/shius/Desktop/campaign-website/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/shius/Desktop/campaign-website/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/shius/Desktop/campaign-website/node_modules/ufo/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/shius/Desktop/campaign-website/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/shius/Desktop/campaign-website/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/shius/Desktop/campaign-website/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/shius/Desktop/campaign-website/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/shius/Desktop/campaign-website/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/shius/Desktop/campaign-website/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/shius/Desktop/campaign-website/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/shius/Desktop/campaign-website/node_modules/unstorage/drivers/memory.mjs';
import 'file://C:/Users/shius/Desktop/campaign-website/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/Users/shius/Desktop/campaign-website/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/shius/Desktop/campaign-website/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/shius/Desktop/campaign-website/node_modules/pathe/dist/index.mjs';

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

export { _sfc_main as default };
//# sourceMappingURL=index-1aa038ef.mjs.map
