<script setup lang="ts">
import {computed, useSlots} from "vue";
import {extractI18nValue, getDefaultValues, Header, HeaderConfig, IconConfig, IconPosition} from "lkt-vue-kernel";

const slots = useSlots();

const props = withDefaults(defineProps<HeaderConfig>(), getDefaultValues(Header));

const computedClassName = computed(() => {
        let r = [];

        if (props.tag) r.push(`is-${props.tag}`);
        if (props.class) r.push(props.class);

        return r.join(' ');
    }),
    computedHasImage = computed(() => {
        if (typeof props.image === 'object') {
            return props.image.src !== '';
        }
        return false;
    }),
    computedHasStartIcon = computed(() => {
        if (typeof props.icon === 'object') {
            return props.icon.position === IconPosition.Start;
        }
        return typeof props.icon !== undefined && props.icon.length > 0;
    }),
    computedHasEndIcon = computed(() => {
        if (typeof props.icon === 'object') {
            return props.icon.position === IconPosition.End;
        }
        return false;
    }),
    computedIcon = computed(() => {
        if (typeof props.icon === 'object') {
            return props.icon;
        }
        return <IconConfig>{icon: props.icon};
    }),
    computedText = computed(() => {
        return extractI18nValue(props.text);
    });

</script>

<template>
    <div
        class="lkt-header"
        :class="computedClassName"
    >
        <header class="lkt-header--top">

            <template v-if="slots['top-start']">
                <slot name="top-start"/>
            </template>

            <lkt-button v-if="topStartButtons?.length > 0" v-for="btn in topStartButtons" v-bind="btn"/>
            <lkt-polymorphic-element v-if="topStartContent?.length > 0" v-for="el in topStartContent" v-bind="el"/>

            <lkt-image v-if="computedHasImage" v-bind="image"/>
            <lkt-icon v-if="computedHasStartIcon" v-bind="computedIcon"/>
            <component v-if="slots.text" :is="tag" class="lkt-header--main">
                <slot name="text"/>
            </component>
            <component v-else-if="computedText" :is="tag" class="lkt-header--main" v-html="computedText"/>
            <lkt-icon v-if="computedHasEndIcon" v-bind="computedIcon"/>

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