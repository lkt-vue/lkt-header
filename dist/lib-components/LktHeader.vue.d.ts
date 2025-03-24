import { IconConfig } from "lkt-vue-kernel";
declare const slots: Readonly<{
    [name: string]: import("vue").Slot<any> | undefined;
}>;
declare const computedClassName: import("vue").ComputedRef<string | number>;
declare const computedComponent: import("vue").ComputedRef<string>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_5: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    text?: (props: typeof __VLS_5) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<IconConfig, {
    slots: typeof slots;
    computedClassName: typeof computedClassName;
    computedComponent: typeof computedComponent;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<IconConfig> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    type: import("lkt-vue-kernel").IconType;
    position: import("lkt-vue-kernel").IconPosition;
    text: string | number;
    class: string | number;
    icon: string | number;
    events: import("lkt-vue-kernel").EventsConfig;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<IconConfig, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<IconConfig> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    type: import("lkt-vue-kernel").IconType;
    position: import("lkt-vue-kernel").IconPosition;
    text: string | number;
    class: string | number;
    icon: string | number;
    events: import("lkt-vue-kernel").EventsConfig;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
