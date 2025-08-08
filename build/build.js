import { defineComponent, mergeDefaults, useSlots, computed, resolveComponent, createElementBlock, openBlock, normalizeClass, createBlock, createCommentVNode, renderSlot, normalizeProps, mergeProps, unref, resolveDynamicComponent, withCtx } from "vue";
import { getDefaultValues, Header } from "lkt-vue-kernel";
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
      let r = [];
      if (props.tag) r.push(`is-${props.tag}`);
      if (props.class) r.push(props.class);
      return r.join(" ");
    });
    return (_ctx, _cache) => {
      const _component_lkt_icon = resolveComponent("lkt-icon");
      return openBlock(), createElementBlock("header", {
        class: normalizeClass(["lkt-header", computedClassName.value])
      }, [
        _ctx.icon ? (openBlock(), createBlock(_component_lkt_icon, normalizeProps(mergeProps({ key: 0 }, { icon: _ctx.icon })), null, 16)) : createCommentVNode("", true),
        unref(slots).text ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
          key: 1,
          class: "lkt-header-main"
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "text")
          ]),
          _: 3
        })) : _ctx.text ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
          key: 2,
          class: "lkt-header-main",
          innerHTML: _ctx.text
        }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
        unref(slots)["web-element-actions"] ? renderSlot(_ctx.$slots, "web-element-actions", { key: 3 }) : createCommentVNode("", true)
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
