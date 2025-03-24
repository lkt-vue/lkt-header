<script setup lang="ts">
import {computed, useSlots} from "vue";
import {getDefaultValues, Icon, IconConfig} from "lkt-vue-kernel";

const slots = useSlots();

const props = withDefaults(defineProps<IconConfig>(), getDefaultValues(Icon));

const computedClassName = computed(() => {
    return props.class;
});

const computedComponent = computed(() => {
    return 'h2';
})

</script>

<template>
    <header
        class="lkt-header"
        :class="computedClassName">
        <component :is="computedComponent" class="lkt-header-main">
            <i v-if="icon" :class="icon"/>
            <template v-if="slots.text">
                <slot name="text"/>
            </template>
            <span v-else-if="text" v-html="text"/>
        </component>
    </header>
</template>