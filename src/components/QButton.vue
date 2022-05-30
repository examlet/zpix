<script setup lang="ts">
interface Props {
    tag?: any;
    fit?: "auto" | "grow";
    size?: "tiny" | "small" | "medium" | "large" | "huge";
    font?: "regular" | "medium" | "strong";
    type?: "basic" | "primary" | "secondary" | "outline" | "text";
    round?: "none" | "normal" | "circle";
    disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    tag: "button",
    fit: "auto",
    size: "medium",
    font: "medium",
    type: "basic",
    round: "normal",
    disabled: false,
});

const emit = defineEmits(["click"]);

function createRipple(event: { currentTarget: any; clientX: number; clientY: number }) {
    const button = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('btn-ripple');
    circle.classList.add(`btn-ripple-${props.type}`);

    const ripple = button.getElementsByClassName('btn-ripple')[0];

    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

function removeRipple(event: { currentTarget: any }) {
    const button = event.currentTarget;
    const ripple = button.getElementsByClassName('btn-ripple')[0];

    if (ripple) {
        ripple.remove();
    }
}
</script>

<template>
    <component class="btn" :class="[
        `btn-fit-${props.fit}`,
        `btn-size-${props.size}`,
        `btn-font-${props.font}`,
        `btn-round-${props.round}`,
        `btn-type-${props.type}`,
    ]" :is="props.tag" :disabled="props.disabled" @click="emit('click')" @mousedown="createRipple"
        @mouseleave="removeRipple">
        <span class="btn-content btn-icon">
            <slot name="icon" />
        </span>
        <span class="btn-content">
            <slot />
        </span>
    </component>
</template>

<style scoped>
.btn {
    position: relative;
    z-index: auto;
    display: inline-flex;
    flex-wrap: nowrap;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    user-select: none;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    border: none;
    white-space: nowrap;
    overflow: hidden;
    width: min-content;

    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    /* gap: 5px; */
}

.btn-icon:not(:empty) {
    margin-right: 5px;
    color: #ffffff;
}

.btn-content {
    z-index: 999;
}

.btn-fit-grow {
    width: 100%;
}

.btn-size-tiny {
    font-size: 12px;
    height: 22px;
    padding: 0 6px;
}

.btn-size-small {
    font-size: 14px;
    height: 28px;
    padding: 0 10px;
}

.btn-size-medium {
    font-size: 14px;
    height: 34px;
    padding: 0 14px;
}

.btn-size-large {
    font-size: 15px;
    height: 40px;
    padding: 0 18px;
}

.btn-size-huge {
    font-size: 16px;
    height: 48px;
    padding: 0 22px;
}

.btn-font-medium {
    font-weight: 500;
    letter-spacing: 0.05em;
}

.btn-font-strong {
    font-weight: 600;
    letter-spacing: 0.06em;
}

.btn-round-normal {
    border-radius: 3px;
}

.btn-round-circle {
    border-radius: 34px;
}

.btn-type-basic {
    background-color: #4caf50;
    color: #f5f5f5;
}

.btn-type-basic:hover {
    background-color: #5ab55e;
}

.btn-type-basic:focus {
    background-color: #77c27a;
    color: #ffffff;
}

.btn-type-basic:active {
    color: #ffffff;
}

.btn-type-primary {
    background-color: #daf0e4;
    color: #20a35e;
}

.btn-type-primary:hover {
    background-color: #cceada;
}

.btn-type-primary:focus {
    background-color: #cceada;
}

.btn-type-primary:active {
    color: #188b4e;
}

.btn-type-secondary {
    background-color: transparent;
    color: #4caf50;
}

.btn-type-secondary:hover {
    background-color: #e8f0e8;
}

.btn-type-secondary:focus {
    background-color: #cce4cd;
}

.btn-type-secondary:active {
    color: #3c923e;
}

.btn-type-outline {
    background-color: transparent;
    color: #222222;
    border: #e0e0e6 1px solid;
}

.btn-type-outline:hover {
    color: #4caf50;
    border: #4caf50 1px solid;
}

.btn-type-outline:focus {
    color: #3e8340;
    border: #3e8340 1px solid; 
}

.btn-type-outline:active {
    color: #3c923e;
    border: #3c923e 1px solid; 
}

.btn-type-text {
    background-color: transparent;
    color: #222222;
}

.btn-type-text:hover {
    color: #4caf50;
}

.btn-type-text:focus {
    color: #3e8340;
}

.btn-type-text:active {
    color: #3c923e;
}
</style>

<style>
.btn-ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(4);
    animation: ripple 600ms linear;
}

.btn-ripple-basic {
    background-color: #99d19b;
}

.btn-ripple-primary {
    background-color: #bfe5d1;
}

.btn-ripple-secondary {
    background-color: #acd7ae;
}

.btn-ripple-outline {
    background-color: #e8f0e8;
}

@keyframes ripple {
    from {
        transform: scale(0);
    }

    to {
        transform: scale(4);
    }
}
</style>