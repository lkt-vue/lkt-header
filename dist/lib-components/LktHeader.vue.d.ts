import { HeaderConfig } from "lkt-vue-kernel";
declare const slots: Readonly<{
    [name: string]: import("vue").Slot<any> | undefined;
}>;
declare const computedClassName: import("vue").ComputedRef<string>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_9: {}, __VLS_15: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    text?: (props: typeof __VLS_9) => any;
} & {
    'web-element-actions'?: (props: typeof __VLS_15) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<HeaderConfig, {
    slots: typeof slots;
    computedClassName: typeof computedClassName;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<HeaderConfig> & Readonly<{}>, {
    text: string;
    class: string;
    tag: import("lkt-vue-kernel").HeaderTag;
    icon: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<HeaderConfig, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<HeaderConfig> & Readonly<{}>, {
    text: string;
    class: string;
    tag: import("lkt-vue-kernel").HeaderTag;
    icon: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
