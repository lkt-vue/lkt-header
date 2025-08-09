import { HeaderConfig, IconConfig } from "lkt-vue-kernel";
declare const slots: Readonly<{
    [name: string]: import("vue").Slot<any> | undefined;
}>;
declare const computedClassName: import("vue").ComputedRef<string>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_13: {}, __VLS_23: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    text?: (props: typeof __VLS_13) => any;
} & {
    'web-element-actions'?: (props: typeof __VLS_23) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<HeaderConfig, {
    slots: typeof slots;
    computedClassName: typeof computedClassName;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<HeaderConfig> & Readonly<{}>, {
    text: string;
    class: string;
    tag: import("lkt-vue-kernel").HeaderTag;
    icon: string | IconConfig;
    topStartButtons: Array<import("lkt-vue-kernel").ButtonConfig>;
    topEndButtons: Array<import("lkt-vue-kernel").ButtonConfig>;
    bottomButtons: Array<import("lkt-vue-kernel").ButtonConfig>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<HeaderConfig, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<HeaderConfig> & Readonly<{}>, {
    text: string;
    class: string;
    tag: import("lkt-vue-kernel").HeaderTag;
    icon: string | IconConfig;
    topStartButtons: Array<import("lkt-vue-kernel").ButtonConfig>;
    topEndButtons: Array<import("lkt-vue-kernel").ButtonConfig>;
    bottomButtons: Array<import("lkt-vue-kernel").ButtonConfig>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
