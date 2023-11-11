import { _ as __nuxt_component_0 } from "./nuxt-link-01469011.js";
import { defineComponent, resolveComponent, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, renderSlot, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
import { L as LEGISLATOR, N as NAV, S as SOCIAL } from "./constant-902bcd5d.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "ufo";
import "hookable";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "destr";
import "devalue";
import "defu";
import "klona";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "@vue/devtools-api";
const logo = "" + __buildAssetsURL("logo.daf771f3.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app_bar = resolveComponent("v-app-bar");
      const _component_v_img = resolveComponent("v-img");
      const _component_NuxtLink = __nuxt_component_0;
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_container = resolveComponent("v-container");
      _push(`<template${ssrRenderAttrs(_attrs)} data-v-6c2b1c89><div data-v-6c2b1c89>`);
      _push(ssrRenderComponent(_component_v_app_bar, {
        elevation: 0,
        class: "py-4 px-6",
        style: { "background-color": "transparent" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-100 d-flex justify-space-between align-center py-4 px-6 rounded-xl" style="${ssrRenderStyle({ "background": "rgba(255, 255, 255, 0.8)" })}" data-v-6c2b1c89${_scopeId}><div class="d-flex align-center" data-v-6c2b1c89${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_img, {
              class: "mr-2",
              width: 52,
              height: 43,
              src: unref(logo)
            }, null, _parent2, _scopeId));
            _push2(`<h4 class="text-h4 text-primary" data-v-6c2b1c89${_scopeId}>${ssrInterpolate(unref(LEGISLATOR).name)} ${ssrInterpolate(unref(LEGISLATOR).englishName)}</h4></div><nav data-v-6c2b1c89${_scopeId}><!--[-->`);
            ssrRenderList(unref(NAV), (link) => {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: link.route,
                class: "text-text-primary text-subtitle-1 mx-6 my-2",
                "active-class": "bg-red"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(link.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(link.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></nav><div class="d-flex ga-4" data-v-6c2b1c89${_scopeId}><!--[-->`);
            ssrRenderList(unref(SOCIAL), (item) => {
              _push2(ssrRenderComponent(_component_v_btn, {
                class: "rounded-pill px-0",
                style: { "height": "48px", "min-width": "48px" },
                variant: "text"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_icon, {
                      style: { "font-size": "28px" },
                      color: item.color,
                      icon: "mdi-" + item.icon,
                      class: item.class || ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_icon, {
                        style: { "font-size": "28px" },
                        color: item.color,
                        icon: "mdi-" + item.icon,
                        class: item.class || ""
                      }, null, 8, ["color", "icon", "class"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "w-100 d-flex justify-space-between align-center py-4 px-6 rounded-xl",
                style: { "background": "rgba(255, 255, 255, 0.8)" }
              }, [
                createVNode("div", { class: "d-flex align-center" }, [
                  createVNode(_component_v_img, {
                    class: "mr-2",
                    width: 52,
                    height: 43,
                    src: unref(logo)
                  }, null, 8, ["src"]),
                  createVNode("h4", { class: "text-h4 text-primary" }, toDisplayString(unref(LEGISLATOR).name) + " " + toDisplayString(unref(LEGISLATOR).englishName), 1)
                ]),
                createVNode("nav", null, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(NAV), (link) => {
                    return openBlock(), createBlock(_component_NuxtLink, {
                      to: link.route,
                      class: "text-text-primary text-subtitle-1 mx-6 my-2",
                      "active-class": "bg-red"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(link.title), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"]);
                  }), 256))
                ]),
                createVNode("div", { class: "d-flex ga-4" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(SOCIAL), (item) => {
                    return openBlock(), createBlock(_component_v_btn, {
                      class: "rounded-pill px-0",
                      style: { "height": "48px", "min-width": "48px" },
                      variant: "text"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, {
                          style: { "font-size": "28px" },
                          color: item.color,
                          icon: "mdi-" + item.icon,
                          class: item.class || ""
                        }, null, 8, ["color", "icon", "class"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 256))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_container, {
        fluid: "",
        class: "main"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div></template>`);
    };
  }
});
const default_vue_vue_type_style_index_0_scoped_6c2b1c89_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6c2b1c89"]]);
export {
  _default as default
};
//# sourceMappingURL=default-53e50424.js.map
