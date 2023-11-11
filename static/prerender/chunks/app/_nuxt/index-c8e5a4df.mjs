import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'file://C:/Users/shius/Desktop/campaign-website/node_modules/vue/server-renderer/index.mjs';
import { defineComponent, ref, unref, useSSRContext } from 'file://C:/Users/shius/Desktop/campaign-website/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { u as useSeoMeta } from './index-2cdcde44.mjs';
import '../server.mjs';
import 'file://C:/Users/shius/Desktop/campaign-website/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/shius/Desktop/campaign-website/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/shius/Desktop/campaign-website/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/shius/Desktop/campaign-website/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/shius/Desktop/campaign-website/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/shius/Desktop/campaign-website/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/shius/Desktop/campaign-website/node_modules/vue-router/dist/vue-router.node.mjs';
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

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(_attrs)}>Button</button>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MyButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const msg = ref("123");
    useSeoMeta({
      title: "Test Page",
      description: "this is desc"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_my_button = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><p>Activity${ssrInterpolate(unref(msg))}</p>`);
      _push(ssrRenderComponent(_component_my_button, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/activity/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-c8e5a4df.mjs.map
