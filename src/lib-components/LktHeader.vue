<script setup lang="ts">
import {computed, useSlots} from "vue";
import {getDefaultValues, Header, HeaderConfig, IconConfig} from "lkt-vue-kernel";

const slots = useSlots();

const props = withDefaults(defineProps<HeaderConfig>(), getDefaultValues(Header));

const computedClassName = computed(() => {
    return props.class;
});

</script>

<template>
    <header
        class="lkt-header"
        :class="computedClassName">
        <lkt-icon v-if="icon" v-bind="<IconConfig>{icon}"/>
        <component :is="tag" class="lkt-header-main">
            <template v-if="slots.text">
                <slot name="text"/>
            </template>
            <span v-else-if="text" v-html="text"/>
        </component>
    </header>
</template>