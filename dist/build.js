import { defineComponent, mergeDefaults, useSlots, computed, resolveComponent, createElementBlock, openBlock, normalizeClass, createElementVNode, createCommentVNode, renderSlot, createBlock, unref, Fragment, renderList, mergeProps, normalizeProps, resolveDynamicComponent, withCtx } from "vue";
import { IconPosition, extractI18nValue, getDefaultValues, Header } from "lkt-vue-kernel";
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
    image: {},
    topStartButtons: {},
    topStartContent: {},
    topEndButtons: {},
    topEndContent: {},
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
    }), computedHasImage = computed(() => {
      if (typeof props.image === "object") {
        return props.image.src !== "";
      }
      return false;
    }), computedHasStartIcon = computed(() => {
      if (typeof props.icon === "object") {
        return props.icon.position === IconPosition.Start;
      }
      return typeof props.icon !== void 0 && props.icon.length > 0;
    }), computedHasEndIcon = computed(() => {
      if (typeof props.icon === "object") {
        return props.icon.position === IconPosition.End;
      }
      return false;
    }), computedIcon = computed(() => {
      if (typeof props.icon === "object") {
        return props.icon;
      }
      return { icon: props.icon };
    }), computedText = computed(() => {
      return extractI18nValue(props.text);
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_lkt_button = resolveComponent("lkt-button");
      const _component_lkt_polymorphic_element = resolveComponent("lkt-polymorphic-element");
      const _component_lkt_image = resolveComponent("lkt-image");
      const _component_lkt_icon = resolveComponent("lkt-icon");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["lkt-header", computedClassName.value])
      }, [
        createElementVNode("header", _hoisted_1, [
          unref(slots)["top-start"] ? renderSlot(_ctx.$slots, "top-start", { key: 0 }) : createCommentVNode("", true),
          ((_a = _ctx.topStartButtons) == null ? void 0 : _a.length) > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(_ctx.topStartButtons, (btn) => {
            return openBlock(), createBlock(_component_lkt_button, mergeProps({ ref_for: true }, btn), null, 16);
          }), 256)) : createCommentVNode("", true),
          ((_b = _ctx.topStartContent) == null ? void 0 : _b.length) > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(_ctx.topStartContent, (el) => {
            return openBlock(), createBlock(_component_lkt_polymorphic_element, mergeProps({ ref_for: true }, el), null, 16);
          }), 256)) : createCommentVNode("", true),
          computedHasImage.value ? (openBlock(), createBlock(_component_lkt_image, normalizeProps(mergeProps({ key: 3 }, _ctx.image)), null, 16)) : createCommentVNode("", true),
          computedHasStartIcon.value ? (openBlock(), createBlock(_component_lkt_icon, normalizeProps(mergeProps({ key: 4 }, computedIcon.value)), null, 16)) : createCommentVNode("", true),
          unref(slots).text ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
            key: 5,
            class: "lkt-header--main"
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "text")
            ]),
            _: 3
          })) : computedText.value ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
            key: 6,
            class: "lkt-header--main",
            innerHTML: computedText.value
          }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
          computedHasEndIcon.value ? (openBlock(), createBlock(_component_lkt_icon, normalizeProps(mergeProps({ key: 7 }, computedIcon.value)), null, 16)) : createCommentVNode("", true),
          ((_c = _ctx.topEndContent) == null ? void 0 : _c.length) > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 8 }, renderList(_ctx.topEndContent, (el) => {
            return openBlock(), createBlock(_component_lkt_polymorphic_element, mergeProps({ ref_for: true }, el), null, 16);
          }), 256)) : createCommentVNode("", true),
          ((_d = _ctx.topEndButtons) == null ? void 0 : _d.length) > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 9 }, renderList(_ctx.topEndButtons, (btn) => {
            return openBlock(), createBlock(_component_lkt_button, mergeProps({ ref_for: true }, btn), null, 16);
          }), 256)) : createCommentVNode("", true),
          unref(slots)["web-element-actions"] ? renderSlot(_ctx.$slots, "web-element-actions", { key: 10 }) : createCommentVNode("", true)
        ]),
        ((_e = _ctx.bottomButtons) == null ? void 0 : _e.length) > 0 ? (openBlock(), createElementBlock("nav", _hoisted_2, [
          ((_f = _ctx.bottomButtons) == null ? void 0 : _f.length) > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.bottomButtons, (btn) => {
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
