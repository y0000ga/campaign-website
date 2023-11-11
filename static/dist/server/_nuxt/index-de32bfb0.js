import { defineComponent, resolveComponent, withCtx, createTextVNode, toDisplayString, useSSRContext, computed, unref, mergeProps, createVNode, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { P as POLICY, L as LEGISLATOR, a as PROMOTION, A as ADVOCATE, T as TAIWAN_FUTURE, b as ADVOCATE_CONTENT, c as ACTIVITY, d as ACTION, S as SOCIAL } from "./constant-902bcd5d.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "MainTitle",
  __ssrInlineRender: true,
  props: {
    englishTitle: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_chip = resolveComponent("v-chip");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_chip, { class: "text-h6 text-white bg-text-primary" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.englishTitle)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.englishTitle), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="styled-gradient text-mantou title" data-v-00a355c9>${ssrInterpolate(props.title)}</h1><!--]-->`);
    };
  }
});
const MainTitle_vue_vue_type_style_index_0_scoped_00a355c9_lang = "";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainTitle.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-00a355c9"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BaseButton",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const color = computed(
      () => props.theme === "primary" ? "#DA7D4A" : props.theme === "gray" ? "#F1F5F9" : "#ffffff"
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _cssVars = { style: {
        "--54a99938": unref(color)
      } };
      _push(ssrRenderComponent(_component_v_btn, mergeProps({
        variant: "tonal",
        plain: "",
        class: "baseButton rounded-pill pa-0"
      }, _attrs, _cssVars), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h6 class="${ssrRenderClass(["text-h6", "my-5", "ml-6", "mr-2", props.theme === "primary" ? "text-white" : "text-text-primary"])}"${_scopeId}>${ssrInterpolate(props.title)}</h6>`);
            _push2(ssrRenderComponent(_component_v_icon, {
              icon: props.icon,
              class: ["mr-4", props.theme === "primary" ? "text-white" : "text-text-primary"],
              style: { "font-size": "24px" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("h6", {
                class: ["text-h6", "my-5", "ml-6", "mr-2", props.theme === "primary" ? "text-white" : "text-text-primary"]
              }, toDisplayString(props.title), 3),
              createVNode(_component_v_icon, {
                icon: props.icon,
                class: ["mr-4", props.theme === "primary" ? "text-white" : "text-text-primary"],
                style: { "font-size": "24px" }
              }, null, 8, ["icon", "class"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const BaseButton_vue_vue_type_style_index_0_scope_true_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BaseButton.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const swiper = "";
const pagination = "";
const BaseSwiper_vue_vue_type_style_index_0_scope_true_lang = "";
const _sfc_main$2 = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const customPagination = {
      el: ".swiper-pagination",
      renderBullet: (index, className) => {
        return `<span class="${className} mx-2 bg-primary" style="width:12px;height:12px" key={${index}} value={${index}}></span>`;
      }
    };
    return {
      modules: [Pagination],
      customPagination
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_v_img = resolveComponent("v-img");
  const _component_v_container = resolveComponent("v-container");
  const _component_v_chip = resolveComponent("v-chip");
  const _component_base_button = _sfc_main$3;
  _push(ssrRenderComponent(_component_swiper, mergeProps({
    effect: "coverflow",
    spaceBetween: 0,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    pagination: $setup.customPagination,
    modules: $setup.modules,
    loop: true,
    class: "mySwiper"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList([..."POLICY" in _ctx ? _ctx.POLICY : unref(POLICY), ..."POLICY" in _ctx ? _ctx.POLICY : unref(POLICY)], (policy) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: policy.title,
            class: "bg-white d-flex"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_v_img, {
                  src: policy.imgSrc,
                  width: "428px",
                  style: { "border-radius": "24px" }
                }, null, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_v_container, { class: "pa-0 ml-8 d-flex flex-column justify-center" }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_v_chip, {
                        variant: "text",
                        style: { "background-color": policy.color, "width": "fit-content" }
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`${ssrInterpolate(policy.subTitle)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(policy.subTitle), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                      _push4(`<h4 class="text-h4 mt-4 mb-10"${_scopeId3}>${ssrInterpolate(policy.title[0])}<br${_scopeId3}>${ssrInterpolate(policy.title[1])}</h4>`);
                      _push4(ssrRenderComponent(_component_base_button, {
                        title: "查看",
                        theme: "primary",
                        icon: "mdi-arrow-right"
                      }, null, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_v_chip, {
                          variant: "text",
                          style: { "background-color": policy.color, "width": "fit-content" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(policy.subTitle), 1)
                          ]),
                          _: 2
                        }, 1032, ["style"]),
                        createVNode("h4", { class: "text-h4 mt-4 mb-10" }, [
                          createTextVNode(toDisplayString(policy.title[0]), 1),
                          createVNode("br"),
                          createTextVNode(toDisplayString(policy.title[1]), 1)
                        ]),
                        createVNode(_component_base_button, {
                          title: "查看",
                          theme: "primary",
                          icon: "mdi-arrow-right"
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_v_img, {
                    src: policy.imgSrc,
                    width: "428px",
                    style: { "border-radius": "24px" }
                  }, null, 8, ["src"]),
                  createVNode(_component_v_container, { class: "pa-0 ml-8 d-flex flex-column justify-center" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_chip, {
                        variant: "text",
                        style: { "background-color": policy.color, "width": "fit-content" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(policy.subTitle), 1)
                        ]),
                        _: 2
                      }, 1032, ["style"]),
                      createVNode("h4", { class: "text-h4 mt-4 mb-10" }, [
                        createTextVNode(toDisplayString(policy.title[0]), 1),
                        createVNode("br"),
                        createTextVNode(toDisplayString(policy.title[1]), 1)
                      ]),
                      createVNode(_component_base_button, {
                        title: "查看",
                        theme: "primary",
                        icon: "mdi-arrow-right"
                      })
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]--><div class="swiper-pagination"${_scopeId}></div>`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList([..."POLICY" in _ctx ? _ctx.POLICY : unref(POLICY), ..."POLICY" in _ctx ? _ctx.POLICY : unref(POLICY)], (policy) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: policy.title,
              class: "bg-white d-flex"
            }, {
              default: withCtx(() => [
                createVNode(_component_v_img, {
                  src: policy.imgSrc,
                  width: "428px",
                  style: { "border-radius": "24px" }
                }, null, 8, ["src"]),
                createVNode(_component_v_container, { class: "pa-0 ml-8 d-flex flex-column justify-center" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_chip, {
                      variant: "text",
                      style: { "background-color": policy.color, "width": "fit-content" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(policy.subTitle), 1)
                      ]),
                      _: 2
                    }, 1032, ["style"]),
                    createVNode("h4", { class: "text-h4 mt-4 mb-10" }, [
                      createTextVNode(toDisplayString(policy.title[0]), 1),
                      createVNode("br"),
                      createTextVNode(toDisplayString(policy.title[1]), 1)
                    ]),
                    createVNode(_component_base_button, {
                      title: "查看",
                      theme: "primary",
                      icon: "mdi-arrow-right"
                    })
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024);
          }), 128)),
          createVNode("div", { class: "swiper-pagination" })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BaseSwiper.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const main = "" + __buildAssetsURL("main.4456e757.svg");
const mainBg = "" + __buildAssetsURL("main-bg.a8c078e2.svg");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Marquee",
  __ssrInlineRender: true,
  props: {
    content: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "marquee w-100 text-mantou text-white bg-primary" }, _attrs))}><div class="wrapper"><p class="content">${ssrInterpolate(props.content)}</p></div></div>`);
    };
  }
});
const Marquee_vue_vue_type_style_index_0_setup_true_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Marquee.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const advocate = "" + __buildAssetsURL("advocate.b62250f1.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_img = resolveComponent("v-img");
      const _component_main_title = __nuxt_component_0;
      const _component_v_col = resolveComponent("v-col");
      const _component_base_swiper = __nuxt_component_1;
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_container, { class: "d-flex justify-center flex-column title ga-4 mb-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, { class: "d-flex justify-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="styled-gradient text-mantou slogan"${_scopeId2}>台灣的明天 喵先鋪路</h1>`);
                } else {
                  return [
                    createVNode("h1", { class: "styled-gradient text-mantou slogan" }, "台灣的明天 喵先鋪路")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_row, { class: "d-flex justify-center align-center ga-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_chip, {
                    class: "text-h3 text-white bg-text-primary title border-radius-16",
                    size: "x-large"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`2024 立委參選人`);
                      } else {
                        return [
                          createTextVNode("2024 立委參選人")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card, { class: "d-flex align-center px-4 py-3 box-shadow-primary" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_chip, { class: "number text-white rounded-pill d-flex justify-center mr-3" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`3`);
                            } else {
                              return [
                                createTextVNode("3")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<h1 class="text-h1 text-primary"${_scopeId3}>${ssrInterpolate(unref(LEGISLATOR).name)} ${ssrInterpolate(unref(LEGISLATOR).englishName)}</h1>`);
                      } else {
                        return [
                          createVNode(_component_v_chip, { class: "number text-white rounded-pill d-flex justify-center mr-3" }, {
                            default: withCtx(() => [
                              createTextVNode("3")
                            ]),
                            _: 1
                          }),
                          createVNode("h1", { class: "text-h1 text-primary" }, toDisplayString(unref(LEGISLATOR).name) + " " + toDisplayString(unref(LEGISLATOR).englishName), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_chip, {
                      class: "text-h3 text-white bg-text-primary title border-radius-16",
                      size: "x-large"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("2024 立委參選人")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card, { class: "d-flex align-center px-4 py-3 box-shadow-primary" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_chip, { class: "number text-white rounded-pill d-flex justify-center mr-3" }, {
                          default: withCtx(() => [
                            createTextVNode("3")
                          ]),
                          _: 1
                        }),
                        createVNode("h1", { class: "text-h1 text-primary" }, toDisplayString(unref(LEGISLATOR).name) + " " + toDisplayString(unref(LEGISLATOR).englishName), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_row, { class: "d-flex justify-center" }, {
                default: withCtx(() => [
                  createVNode("h1", { class: "styled-gradient text-mantou slogan" }, "台灣的明天 喵先鋪路")
                ]),
                _: 1
              }),
              createVNode(_component_v_row, { class: "d-flex justify-center align-center ga-4" }, {
                default: withCtx(() => [
                  createVNode(_component_v_chip, {
                    class: "text-h3 text-white bg-text-primary title border-radius-16",
                    size: "x-large"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("2024 立委參選人")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card, { class: "d-flex align-center px-4 py-3 box-shadow-primary" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_chip, { class: "number text-white rounded-pill d-flex justify-center mr-3" }, {
                        default: withCtx(() => [
                          createTextVNode("3")
                        ]),
                        _: 1
                      }),
                      createVNode("h1", { class: "text-h1 text-primary" }, toDisplayString(unref(LEGISLATOR).name) + " " + toDisplayString(unref(LEGISLATOR).englishName), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_container, { class: "pa-0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, { class: "d-flex justify-center align-end mt-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_img, {
                    width: 723,
                    height: 404,
                    src: unref(mainBg),
                    class: "background"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_img, {
                    width: 420,
                    height: 537,
                    src: unref(main)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_img, {
                      width: 723,
                      height: 404,
                      src: unref(mainBg),
                      class: "background"
                    }, null, 8, ["src"]),
                    createVNode(_component_v_img, {
                      width: 420,
                      height: 537,
                      src: unref(main)
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_row, { class: "d-flex justify-center align-end mt-2" }, {
                default: withCtx(() => [
                  createVNode(_component_v_img, {
                    width: 723,
                    height: 404,
                    src: unref(mainBg),
                    class: "background"
                  }, null, 8, ["src"]),
                  createVNode(_component_v_img, {
                    width: 420,
                    height: 537,
                    src: unref(main)
                  }, null, 8, ["src"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        content: unref(PROMOTION).join("")
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_container, { class: "maxWidth100 bg-background-secondary d-flex justify-center px-104" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, {
              class: "content rounded-xl d-flex flex-row box-shadow-primary",
              variant: "elevated"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_container, { class: "w-50 d-flex align-center flex-column px-10 justify-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_main_title, {
                          "english-title": "ADVOCATE",
                          title: unref(ADVOCATE)
                        }, null, _parent4, _scopeId3));
                        _push4(`<h3 class="text-h3 my-8"${_scopeId3}>我堅信 ! 藉由推動更完善的<span class="text-primary"${_scopeId3}>貓咪福利</span>和相關政策，更是間接地投資於<span class="text-primary"${_scopeId3}>${ssrInterpolate(unref(TAIWAN_FUTURE))}</span>。</h3><p class="text-subtitle-1"${_scopeId3}>${ssrInterpolate(unref(ADVOCATE_CONTENT))}</p>`);
                      } else {
                        return [
                          createVNode(_component_main_title, {
                            "english-title": "ADVOCATE",
                            title: unref(ADVOCATE)
                          }, null, 8, ["title"]),
                          createVNode("h3", { class: "text-h3 my-8" }, [
                            createTextVNode("我堅信 ! 藉由推動更完善的"),
                            createVNode("span", { class: "text-primary" }, "貓咪福利"),
                            createTextVNode("和相關政策，更是間接地投資於"),
                            createVNode("span", { class: "text-primary" }, toDisplayString(unref(TAIWAN_FUTURE)), 1),
                            createTextVNode("。")
                          ]),
                          createVNode("p", { class: "text-subtitle-1" }, toDisplayString(unref(ADVOCATE_CONTENT)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_img, {
                    class: "h-100",
                    src: unref(advocate)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_container, { class: "w-50 d-flex align-center flex-column px-10 justify-center" }, {
                      default: withCtx(() => [
                        createVNode(_component_main_title, {
                          "english-title": "ADVOCATE",
                          title: unref(ADVOCATE)
                        }, null, 8, ["title"]),
                        createVNode("h3", { class: "text-h3 my-8" }, [
                          createTextVNode("我堅信 ! 藉由推動更完善的"),
                          createVNode("span", { class: "text-primary" }, "貓咪福利"),
                          createTextVNode("和相關政策，更是間接地投資於"),
                          createVNode("span", { class: "text-primary" }, toDisplayString(unref(TAIWAN_FUTURE)), 1),
                          createTextVNode("。")
                        ]),
                        createVNode("p", { class: "text-subtitle-1" }, toDisplayString(unref(ADVOCATE_CONTENT)), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_img, {
                      class: "h-100",
                      src: unref(advocate)
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card, {
                class: "content rounded-xl d-flex flex-row box-shadow-primary",
                variant: "elevated"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_container, { class: "w-50 d-flex align-center flex-column px-10 justify-center" }, {
                    default: withCtx(() => [
                      createVNode(_component_main_title, {
                        "english-title": "ADVOCATE",
                        title: unref(ADVOCATE)
                      }, null, 8, ["title"]),
                      createVNode("h3", { class: "text-h3 my-8" }, [
                        createTextVNode("我堅信 ! 藉由推動更完善的"),
                        createVNode("span", { class: "text-primary" }, "貓咪福利"),
                        createTextVNode("和相關政策，更是間接地投資於"),
                        createVNode("span", { class: "text-primary" }, toDisplayString(unref(TAIWAN_FUTURE)), 1),
                        createTextVNode("。")
                      ]),
                      createVNode("p", { class: "text-subtitle-1" }, toDisplayString(unref(ADVOCATE_CONTENT)), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_img, {
                    class: "h-100",
                    src: unref(advocate)
                  }, null, 8, ["src"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_container, { class: "d-flex justify-center align-center flex-column px-104" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_main_title, {
              "english-title": "LATEST EVENTS",
              title: "最新活動"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card, {
              class: "d-flex flex-row mt-10 ga-6 maxWidth-1320",
              variant: "flat"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_container, { class: "pa-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_img, {
                          class: "w-100",
                          src: unref(ACTIVITY)[0].imgSrc
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, { class: "d-flex flex-column mt-4 ga-2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p class="text-caption text-text-secondary"${_scopeId4}>${ssrInterpolate(unref(ACTIVITY)[0].date)}</p><p class="text-h5 text-text-primary"${_scopeId4}>${ssrInterpolate(unref(ACTIVITY)[0].title)}</p><p class="text-body-1"${_scopeId4}>${ssrInterpolate(unref(ACTIVITY)[0].content)}</p>`);
                            } else {
                              return [
                                createVNode("p", { class: "text-caption text-text-secondary" }, toDisplayString(unref(ACTIVITY)[0].date), 1),
                                createVNode("p", { class: "text-h5 text-text-primary" }, toDisplayString(unref(ACTIVITY)[0].title), 1),
                                createVNode("p", { class: "text-body-1" }, toDisplayString(unref(ACTIVITY)[0].content), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_img, {
                            class: "w-100",
                            src: unref(ACTIVITY)[0].imgSrc
                          }, null, 8, ["src"]),
                          createVNode(_component_v_col, { class: "d-flex flex-column mt-4 ga-2" }, {
                            default: withCtx(() => [
                              createVNode("p", { class: "text-caption text-text-secondary" }, toDisplayString(unref(ACTIVITY)[0].date), 1),
                              createVNode("p", { class: "text-h5 text-text-primary" }, toDisplayString(unref(ACTIVITY)[0].title), 1),
                              createVNode("p", { class: "text-body-1" }, toDisplayString(unref(ACTIVITY)[0].content), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_container, {
                    class: "pa-0 d-flex flex-column",
                    style: { "position": "relative", "gap": "28px" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(ACTIVITY), (activity) => {
                          _push4(ssrRenderComponent(_component_v_row, { class: "ma-0 d-flex ga-4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_col, {
                                  class: "pa-0",
                                  style: { "width": "201px", "max-width": "201px" }
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_img, {
                                        src: activity.imgSrc
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_img, {
                                          src: activity.imgSrc
                                        }, null, 8, ["src"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_col, { class: "pa-0" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<p class="text-caption text-text-secondary"${_scopeId5}>${ssrInterpolate(activity.date)}</p><h6 class="my-2 text-h6 text-text-primary"${_scopeId5}>${ssrInterpolate(activity.title)}</h6><p class="text-body-1 text-text-primary"${_scopeId5}>${ssrInterpolate(activity.content)}</p>`);
                                    } else {
                                      return [
                                        createVNode("p", { class: "text-caption text-text-secondary" }, toDisplayString(activity.date), 1),
                                        createVNode("h6", { class: "my-2 text-h6 text-text-primary" }, toDisplayString(activity.title), 1),
                                        createVNode("p", { class: "text-body-1 text-text-primary" }, toDisplayString(activity.content), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_col, {
                                    class: "pa-0",
                                    style: { "width": "201px", "max-width": "201px" }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_img, {
                                        src: activity.imgSrc
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_v_col, { class: "pa-0" }, {
                                    default: withCtx(() => [
                                      createVNode("p", { class: "text-caption text-text-secondary" }, toDisplayString(activity.date), 1),
                                      createVNode("h6", { class: "my-2 text-h6 text-text-primary" }, toDisplayString(activity.title), 1),
                                      createVNode("p", { class: "text-body-1 text-text-primary" }, toDisplayString(activity.content), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                        _push4(ssrRenderComponent(_sfc_main$3, {
                          title: "查看更多",
                          icon: "mdi-arrow-right",
                          theme: "gray"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(ACTIVITY), (activity) => {
                            return openBlock(), createBlock(_component_v_row, { class: "ma-0 d-flex ga-4" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  class: "pa-0",
                                  style: { "width": "201px", "max-width": "201px" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_img, {
                                      src: activity.imgSrc
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_v_col, { class: "pa-0" }, {
                                  default: withCtx(() => [
                                    createVNode("p", { class: "text-caption text-text-secondary" }, toDisplayString(activity.date), 1),
                                    createVNode("h6", { class: "my-2 text-h6 text-text-primary" }, toDisplayString(activity.title), 1),
                                    createVNode("p", { class: "text-body-1 text-text-primary" }, toDisplayString(activity.content), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 256)),
                          createVNode(_sfc_main$3, {
                            title: "查看更多",
                            icon: "mdi-arrow-right",
                            theme: "gray"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_container, { class: "pa-0" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_img, {
                          class: "w-100",
                          src: unref(ACTIVITY)[0].imgSrc
                        }, null, 8, ["src"]),
                        createVNode(_component_v_col, { class: "d-flex flex-column mt-4 ga-2" }, {
                          default: withCtx(() => [
                            createVNode("p", { class: "text-caption text-text-secondary" }, toDisplayString(unref(ACTIVITY)[0].date), 1),
                            createVNode("p", { class: "text-h5 text-text-primary" }, toDisplayString(unref(ACTIVITY)[0].title), 1),
                            createVNode("p", { class: "text-body-1" }, toDisplayString(unref(ACTIVITY)[0].content), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_container, {
                      class: "pa-0 d-flex flex-column",
                      style: { "position": "relative", "gap": "28px" }
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(ACTIVITY), (activity) => {
                          return openBlock(), createBlock(_component_v_row, { class: "ma-0 d-flex ga-4" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                class: "pa-0",
                                style: { "width": "201px", "max-width": "201px" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_img, {
                                    src: activity.imgSrc
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_v_col, { class: "pa-0" }, {
                                default: withCtx(() => [
                                  createVNode("p", { class: "text-caption text-text-secondary" }, toDisplayString(activity.date), 1),
                                  createVNode("h6", { class: "my-2 text-h6 text-text-primary" }, toDisplayString(activity.title), 1),
                                  createVNode("p", { class: "text-body-1 text-text-primary" }, toDisplayString(activity.content), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 256)),
                        createVNode(_sfc_main$3, {
                          title: "查看更多",
                          icon: "mdi-arrow-right",
                          theme: "gray"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_main_title, {
                "english-title": "LATEST EVENTS",
                title: "最新活動"
              }),
              createVNode(_component_v_card, {
                class: "d-flex flex-row mt-10 ga-6 maxWidth-1320",
                variant: "flat"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_container, { class: "pa-0" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_img, {
                        class: "w-100",
                        src: unref(ACTIVITY)[0].imgSrc
                      }, null, 8, ["src"]),
                      createVNode(_component_v_col, { class: "d-flex flex-column mt-4 ga-2" }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-caption text-text-secondary" }, toDisplayString(unref(ACTIVITY)[0].date), 1),
                          createVNode("p", { class: "text-h5 text-text-primary" }, toDisplayString(unref(ACTIVITY)[0].title), 1),
                          createVNode("p", { class: "text-body-1" }, toDisplayString(unref(ACTIVITY)[0].content), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_container, {
                    class: "pa-0 d-flex flex-column",
                    style: { "position": "relative", "gap": "28px" }
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(ACTIVITY), (activity) => {
                        return openBlock(), createBlock(_component_v_row, { class: "ma-0 d-flex ga-4" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              class: "pa-0",
                              style: { "width": "201px", "max-width": "201px" }
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_img, {
                                  src: activity.imgSrc
                                }, null, 8, ["src"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_col, { class: "pa-0" }, {
                              default: withCtx(() => [
                                createVNode("p", { class: "text-caption text-text-secondary" }, toDisplayString(activity.date), 1),
                                createVNode("h6", { class: "my-2 text-h6 text-text-primary" }, toDisplayString(activity.title), 1),
                                createVNode("p", { class: "text-body-1 text-text-primary" }, toDisplayString(activity.content), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 256)),
                      createVNode(_sfc_main$3, {
                        title: "查看更多",
                        icon: "mdi-arrow-right",
                        theme: "gray"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_container, { class: "d-flex justify-center align-center flex-column px-104 bg-background-secondary maxWidth100" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_main_title, {
              "english-title": "POLICY ISSUES",
              title: "政策議題"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_base_swiper, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_main_title, {
                "english-title": "POLICY ISSUES",
                title: "政策議題"
              }),
              createVNode(_component_base_swiper)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_container, {
        class: "d-flex justify-center px-104 ga-6 maxWidth-1320",
        style: { "width": "1320px" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(ACTION), (item) => {
              _push2(ssrRenderComponent(_component_v_col, {
                class: ["rounded-xl", "w-50", "pa-24", item.id === "donate" ? "bg-primary" : "bg-text-primary"],
                style: { "height": "596px" }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p class="text-mantou" style="${ssrRenderStyle({ "font-size": "52px" })}"${_scopeId2}>${ssrInterpolate(item.title)}</p><p style="${ssrRenderStyle({ "font-size": "20px" })}" class="pt-4 pb-6"${_scopeId2}>${ssrInterpolate(item.content)}</p>`);
                    _push3(ssrRenderComponent(_component_v_row, {
                      class: "d-flex align-center justify-space-between",
                      style: { "height": "241px" }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$3, {
                            title: item.button,
                            icon: "mdi-arrow-right",
                            theme: "white"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_img, {
                            src: item.imgSrc,
                            style: { "max-width": item.id === "donate" ? "224px" : "256px" }
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$3, {
                              title: item.button,
                              icon: "mdi-arrow-right",
                              theme: "white"
                            }, null, 8, ["title"]),
                            createVNode(_component_v_img, {
                              src: item.imgSrc,
                              style: { "max-width": item.id === "donate" ? "224px" : "256px" }
                            }, null, 8, ["src", "style"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("p", {
                        class: "text-mantou",
                        style: { "font-size": "52px" }
                      }, toDisplayString(item.title), 1),
                      createVNode("p", {
                        style: { "font-size": "20px" },
                        class: "pt-4 pb-6"
                      }, toDisplayString(item.content), 1),
                      createVNode(_component_v_row, {
                        class: "d-flex align-center justify-space-between",
                        style: { "height": "241px" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$3, {
                            title: item.button,
                            icon: "mdi-arrow-right",
                            theme: "white"
                          }, null, 8, ["title"]),
                          createVNode(_component_v_img, {
                            src: item.imgSrc,
                            style: { "max-width": item.id === "donate" ? "224px" : "256px" }
                          }, null, 8, ["src", "style"])
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(ACTION), (item) => {
                return openBlock(), createBlock(_component_v_col, {
                  class: ["rounded-xl", "w-50", "pa-24", item.id === "donate" ? "bg-primary" : "bg-text-primary"],
                  style: { "height": "596px" }
                }, {
                  default: withCtx(() => [
                    createVNode("p", {
                      class: "text-mantou",
                      style: { "font-size": "52px" }
                    }, toDisplayString(item.title), 1),
                    createVNode("p", {
                      style: { "font-size": "20px" },
                      class: "pt-4 pb-6"
                    }, toDisplayString(item.content), 1),
                    createVNode(_component_v_row, {
                      class: "d-flex align-center justify-space-between",
                      style: { "height": "241px" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$3, {
                          title: item.button,
                          icon: "mdi-arrow-right",
                          theme: "white"
                        }, null, 8, ["title"]),
                        createVNode(_component_v_img, {
                          src: item.imgSrc,
                          style: { "max-width": item.id === "donate" ? "224px" : "256px" }
                        }, null, 8, ["src", "style"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["class"]);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_container, { class: "d-flex justify-center flex-column px-104 align-center ga-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="styled-gradient text-mantou" style="${ssrRenderStyle({ "font-size": "64px" })}"${_scopeId}>台灣的明天 喵先鋪路</h1>`);
            _push2(ssrRenderComponent(_component_v_row, { class: "d-flex justify-center align-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, { class: "d-flex align-center px-4 py-3 box-shadow-primary" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_chip, { class: "number text-white rounded-pill d-flex justify-center mr-3" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`3`);
                            } else {
                              return [
                                createTextVNode("3")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<h3 class="text-h1 text-primary"${_scopeId3}>${ssrInterpolate(unref(LEGISLATOR).name)} ${ssrInterpolate(unref(LEGISLATOR).englishName)}</h3>`);
                      } else {
                        return [
                          createVNode(_component_v_chip, { class: "number text-white rounded-pill d-flex justify-center mr-3" }, {
                            default: withCtx(() => [
                              createTextVNode("3")
                            ]),
                            _: 1
                          }),
                          createVNode("h3", { class: "text-h1 text-primary" }, toDisplayString(unref(LEGISLATOR).name) + " " + toDisplayString(unref(LEGISLATOR).englishName), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card, { class: "d-flex align-center px-4 py-3 box-shadow-primary" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_chip, { class: "number text-white rounded-pill d-flex justify-center mr-3" }, {
                          default: withCtx(() => [
                            createTextVNode("3")
                          ]),
                          _: 1
                        }),
                        createVNode("h3", { class: "text-h1 text-primary" }, toDisplayString(unref(LEGISLATOR).name) + " " + toDisplayString(unref(LEGISLATOR).englishName), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h1", {
                class: "styled-gradient text-mantou",
                style: { "font-size": "64px" }
              }, "台灣的明天 喵先鋪路"),
              createVNode(_component_v_row, { class: "d-flex justify-center align-center" }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, { class: "d-flex align-center px-4 py-3 box-shadow-primary" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_chip, { class: "number text-white rounded-pill d-flex justify-center mr-3" }, {
                        default: withCtx(() => [
                          createTextVNode("3")
                        ]),
                        _: 1
                      }),
                      createVNode("h3", { class: "text-h1 text-primary" }, toDisplayString(unref(LEGISLATOR).name) + " " + toDisplayString(unref(LEGISLATOR).englishName), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_container, { class: "d-flex justify-center align-start px-104 bg-background-secondary maxWidth100" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, {
              class: "ma-0 d-flex flex-column ga-4",
              style: { "max-width": "676px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_chip, { class: "number footer text-white rounded-pill d-flex justify-center mr-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`3`);
                      } else {
                        return [
                          createTextVNode("3")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<h3 class="text-h3 text-primary"${_scopeId2}>${ssrInterpolate(unref(LEGISLATOR).name)} ${ssrInterpolate(unref(LEGISLATOR).englishName)}</h3></div><div class="d-flex ga-4"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(SOCIAL), (item) => {
                    _push3(ssrRenderComponent(_component_v_btn, {
                      class: "rounded-pill px-0 bg-white",
                      style: { "height": "48px", "min-width": "48px" },
                      variant: "text"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_icon, {
                            style: { "font-size": "28px" },
                            color: item.color,
                            icon: "mdi-" + item.icon,
                            class: item.class || ""
                          }, null, _parent4, _scopeId3));
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
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div><p class="text-caption"${_scopeId2}>© 2023 喵立翰 Miao Li-Han 版權所有</p>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center" }, [
                      createVNode(_component_v_chip, { class: "number footer text-white rounded-pill d-flex justify-center mr-3" }, {
                        default: withCtx(() => [
                          createTextVNode("3")
                        ]),
                        _: 1
                      }),
                      createVNode("h3", { class: "text-h3 text-primary" }, toDisplayString(unref(LEGISLATOR).name) + " " + toDisplayString(unref(LEGISLATOR).englishName), 1)
                    ]),
                    createVNode("div", { class: "d-flex ga-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(SOCIAL), (item) => {
                        return openBlock(), createBlock(_component_v_btn, {
                          class: "rounded-pill px-0 bg-white",
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
                    ]),
                    createVNode("p", { class: "text-caption" }, "© 2023 喵立翰 Miao Li-Han 版權所有")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_row, {
              class: "ma-0 d-flex flex-column ga-4",
              style: { "max-width": "676px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h4 class="text-h4"${_scopeId2}>競選總部</h4><p class="text-body-1"${_scopeId2}> 辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓 <br${_scopeId2}> 電話：(02) 888-5678 <br${_scopeId2}> 電子郵件地址：meowoffice@linmeow.tw </p>`);
                } else {
                  return [
                    createVNode("h4", { class: "text-h4" }, "競選總部"),
                    createVNode("p", { class: "text-body-1" }, [
                      createTextVNode(" 辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓 "),
                      createVNode("br"),
                      createTextVNode(" 電話：(02) 888-5678 "),
                      createVNode("br"),
                      createTextVNode(" 電子郵件地址：meowoffice@linmeow.tw ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_row, {
                class: "ma-0 d-flex flex-column ga-4",
                style: { "max-width": "676px" }
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center" }, [
                    createVNode(_component_v_chip, { class: "number footer text-white rounded-pill d-flex justify-center mr-3" }, {
                      default: withCtx(() => [
                        createTextVNode("3")
                      ]),
                      _: 1
                    }),
                    createVNode("h3", { class: "text-h3 text-primary" }, toDisplayString(unref(LEGISLATOR).name) + " " + toDisplayString(unref(LEGISLATOR).englishName), 1)
                  ]),
                  createVNode("div", { class: "d-flex ga-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(SOCIAL), (item) => {
                      return openBlock(), createBlock(_component_v_btn, {
                        class: "rounded-pill px-0 bg-white",
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
                  ]),
                  createVNode("p", { class: "text-caption" }, "© 2023 喵立翰 Miao Li-Han 版權所有")
                ]),
                _: 1
              }),
              createVNode(_component_v_row, {
                class: "ma-0 d-flex flex-column ga-4",
                style: { "max-width": "676px" }
              }, {
                default: withCtx(() => [
                  createVNode("h4", { class: "text-h4" }, "競選總部"),
                  createVNode("p", { class: "text-body-1" }, [
                    createTextVNode(" 辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓 "),
                    createVNode("br"),
                    createTextVNode(" 電話：(02) 888-5678 "),
                    createVNode("br"),
                    createTextVNode(" 電子郵件地址：meowoffice@linmeow.tw ")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const index_vue_vue_type_style_index_0_setup_true_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-de32bfb0.js.map
