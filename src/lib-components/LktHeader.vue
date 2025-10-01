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
    <div
        class="lkt-header"
        :class="computedClassName"
    >
        <header class="lkt-header--top">
            <lkt-button v-if="topStartButtons?.length > 0" v-for="btn in topStartButtons" v-bind="btn"/>
            <lkt-polymorphic-element v-if="topStartContent?.length > 0" v-for="el in topStartContent" v-bind="el"/>

            <lkt-icon v-if="icon" v-bind="<IconConfig>{icon}"/>
            <component v-if="slots.text" :is="tag" class="lkt-header--main">
                <slot name="text"/>
            </component>
            <component v-else-if="text" :is="tag" class="lkt-header--main" v-html="text"/>

            <lkt-polymorphic-element v-if="topEndContent?.length > 0" v-for="el in topEndContent" v-bind="el"/>
            <lkt-button v-if="topEndButtons?.length > 0" v-for="btn in topEndButtons" v-bind="btn"/>

            <template v-if="slots['web-element-actions']">
                <slot name="web-element-actions"/>
            </template>
        </header>

        <nav v-if="bottomButtons?.length > 0" class="lkt-header--bottom">
            <lkt-button v-if="bottomButtons?.length > 0" v-for="btn in bottomButtons" v-bind="btn"/>
        </nav>
    </div>
</template>