<script setup lang="ts">
import {computed, useSlots} from "vue";
import {getDefaultValues, Header, HeaderConfig, IconConfig} from "lkt-vue-kernel";

const slots = useSlots();

const props = withDefaults(defineProps<HeaderConfig>(), getDefaultValues(Header));

const computedClassName = computed(() => {
    let r = [];

    if (props.tag) r.push(`is-${props.tag}`);
    if (props.class) r.push(props.class);

    return r.join(' ');
});

</script>

<template>
    <header
        class="lkt-header"
        :class="computedClassName">
        <lkt-icon v-if="icon" v-bind="<IconConfig>{icon}"/>
        <component v-if="slots.text" :is="tag" class="lkt-header-main">
            <slot name="text"/>
        </component>
        <component v-else-if="text" :is="tag" class="lkt-header-main" v-html="text"/>

        <template v-if="slots['web-element-actions']">
            <slot name="web-element-actions"/>
        </template>
    </header>
</template>