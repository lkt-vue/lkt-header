import { defineComponent, mergeDefaults, useSlots, computed, resolveComponent, createElementBlock, openBlock, normalizeClass, createBlock, createCommentVNode, normalizeProps, mergeProps, resolveDynamicComponent, withCtx, renderSlot, unref } from "vue";
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
      const _component_lkt_icon = resolveComponent("lkt-icon");
      return openBlock(), createElementBlock("header", {
        class: normalizeClass(["lkt-header", computedClassName.value])
      }, [
        _ctx.icon ? (openBlock(), createBlock(_component_lkt_icon, normalizeProps(mergeProps({ key: 0 }, { icon: _ctx.icon })), null, 16)) : createCommentVNode("", true),
        (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), { class: "lkt-header-main" }, {
          default: withCtx(() => [
            unref(slots).text ? renderSlot(_ctx.$slots, "text", { key: 0 }) : _ctx.text ? (openBlock(), createElementBlock("span", {
              key: 1,
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
