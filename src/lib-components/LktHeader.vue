<script setup lang="ts">
import {computed, useSlots} from "vue";
import {getDefaultValues, Header, HeaderConfig, HeaderTag, Icon, IconConfig} from "lkt-vue-kernel";

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
        <component :is="tag" class="lkt-header-main">
            <i v-if="icon" :class="icon"/>
            <template v-if="slots.text">
                <slot name="text"/>
            </template>
            <span v-else-if="text" v-html="text"/>
        </component>
    </header>
</template>