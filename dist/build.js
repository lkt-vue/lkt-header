import { defineComponent, mergeDefaults, useSlots, computed, createElementBlock, openBlock, normalizeClass, createBlock, resolveDynamicComponent, withCtx, createCommentVNode, renderSlot, unref } from "vue";
import { getDefaultValues, Header } from "lkt-vue-kernel";
const _hoisted_1 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LktHeader",
  props: /* @__PURE__ */ mergeDefaults({
    tag: {},
    class: {},
    text: {},
    icon: {}
  }, getDefaultValues(Header)),
  setup(__props) {
    const slots = useSlots();
    const props = __props;
    const computedClassName = computed(() => {
      return props.class;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("header", {
        class: normalizeClass(["lkt-header", computedClassName.value])
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), { class: "lkt-header-main" }, {
          default: withCtx(() => [
            _ctx.icon ? (openBlock(), createElementBlock("i", {
              key: 0,
              class: normalizeClass(_ctx.icon)
            }, null, 2)) : createCommentVNode("", true),
            unref(slots).text ? renderSlot(_ctx.$slots, "text", { key: 1 }) : _ctx.text ? (openBlock(), createElementBlock("span", {
              key: 2,
              innerHTML: _ctx.text
            }, null, 8, _hoisted_1)) : createCommentVNode("", true)
          ]),
          _: 3
        }))
      ], 2);
    };
  }
});
const LktHeader = {
  install: (app) => {
    if (app.component("lkt-header") === void 0) app.component("lkt-header", _sfc_main);
  }
};
export {
  LktHeader as default
};
