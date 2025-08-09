import { defineComponent, mergeDefaults, useSlots, computed, resolveComponent, createElementBlock, openBlock, normalizeClass, createElementVNode, createCommentVNode, createBlock, renderSlot, Fragment, renderList, mergeProps, normalizeProps, unref, resolveDynamicComponent, withCtx } from "vue";
import { getDefaultValues, Header } from "lkt-vue-kernel";
const _hoisted_1 = { class: "lkt-header--top" };
const _hoisted_2 = {
  key: 0,
  class: "lkt-header--bottom"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LktHeader",
  props: /* @__PURE__ */ mergeDefaults({
    tag: {},
    class: {},
    text: {},
    icon: {},
    topStartButtons: {},
    topEndButtons: {},
    bottomButtons: {}
  }, getDefaultValues(Header)),
  setup(__props) {
    const slots = useSlots();
    const props = __props;
    const computedClassName = computed(() => {
      let r = [];
      if (props.tag) r.push(`is-${props.tag}`);
      if (props.class) r.push(props.class);
      return r.join(" ");
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      const _component_lkt_button = resolveComponent("lkt-button");
      const _component_lkt_icon = resolveComponent("lkt-icon");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["lkt-header", computedClassName.value])
      }, [
        createElementVNode("header", _hoisted_1, [
          ((_a = _ctx.topStartButtons) == null ? void 0 : _a.length) > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.topStartButtons, (btn) => {
            return openBlock(), createBlock(_component_lkt_button, mergeProps({ ref_for: true }, btn), null, 16);
          }), 256)) : createCommentVNode("", true),
          _ctx.icon ? (openBlock(), createBlock(_component_lkt_icon, normalizeProps(mergeProps({ key: 1 }, { icon: _ctx.icon })), null, 16)) : createCommentVNode("", true),
          unref(slots).text ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
            key: 2,
            class: "lkt-header--main"
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "text")
            ]),
            _: 3
          })) : _ctx.text ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
            key: 3,
            class: "lkt-header--main",
            innerHTML: _ctx.text
          }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
          ((_b = _ctx.topEndButtons) == null ? void 0 : _b.length) > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 4 }, renderList(_ctx.topEndButtons, (btn) => {
            return openBlock(), createBlock(_component_lkt_button, mergeProps({ ref_for: true }, btn), null, 16);
          }), 256)) : createCommentVNode("", true),
          unref(slots)["web-element-actions"] ? renderSlot(_ctx.$slots, "web-element-actions", { key: 5 }) : createCommentVNode("", true)
        ]),
        ((_c = _ctx.bottomButtons) == null ? void 0 : _c.length) > 0 ? (openBlock(), createElementBlock("nav", _hoisted_2, [
          ((_d = _ctx.bottomButtons) == null ? void 0 : _d.length) > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.bottomButtons, (btn) => {
            return openBlock(), createBlock(_component_lkt_button, mergeProps({ ref_for: true }, btn), null, 16);
          }), 256)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
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
