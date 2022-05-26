<script setup lang="ts">
interface Props {
    title?: string;
    bordered?: boolean;
    hoverable?: boolean;
    embedded?: boolean;
    closable?: boolean;
    size?: "tiny" | "small" | "medium" | "large" | "huge";
    round?: "none" | "normal" | "circle";
}

const props = withDefaults(defineProps<Props>(), {
    title: "",
    bordered: true,
    hoverable: false,
    embedded: false,
    closable: false,
    size: "small",
    round: "normal"
});

const emit = defineEmits(["close"]);
</script>

<template>
    <div 
        class="card"
        :class="[
            `card-size-${props.size}`,
            `card-round-${props.round}`,
            `card--bordered-${props.bordered}`,
            `card--hoverable-${props.hoverable}`,
            `card--embedded-${props.embedded}`,
        ]"
    >
        <slot name="cover" />
        <div class="card__header">
            <div class="card__header-main">{{ props.title }}</div>
            <div class="card__header-extra">
                <slot name="extra" />
            </div>
            <div v-if="props.closable" @click="emit('close');" class="card__header-close">
                <svg viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g fill="currentColor" fill-rule="nonzero">
                            <path
                                d="M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z">
                            </path>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
        <div class="card__content">
            <slot />
        </div>
        <div class="card__footer">
            <slot name="footer" />
        </div>
        <div class="card__action">
            <slot name="action" />
        </div>
    </div>
</template>

<style scoped>
.card {
    box-sizing: border-box;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    background-color: #ffffff;
    transition: color .3s cubic-bezier(0.4, 0, 0.2, 1),
        background-color .3s cubic-bezier(0.4, 0, 0.2, 1),
        box-shadow .3s cubic-bezier(0.4, 0, 0.2, 1),
        border-color .3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
}

.card-size-tiny .card__header {
    padding: 10px 14px;
}

.card-size-tiny .card__header-main {
    font-size: 14px;
}

.card-size-tiny .card__header-extra {
    font-size: 14px;
}


.card-size-tiny .card__content {
    font-size: 12px;
    padding: 0px 14px 10px;
}

.card-size-tiny .card__footer {
    font-size: 12px;
    padding: 0px 14px 10px;
}

.card-size-tiny .card__action {
    font-size: 12px;
    padding: 10px 14px;
}

.card-size-small .card__header {
    padding: 12px 16px;
}

.card-size-small .card__header-main {
    font-size: 16px;
}

.card-size-small .card__header-extra {
    font-size: 15px;
}

.card-size-small .card__content {
    font-size: 14px;
    padding: 0px 16px 12px;
}

.card-size-small .card__footer {
    font-size: 14px;
    padding: 0px 16px 12px;
}

.card-size-small .card__action {
    font-size: 14px;
    padding: 12px 16px;
}

.card-size-medium .card__header {
    padding: 19px 24px 20px;
}

.card-size-medium .card__header-main {
    font-size: 18px;
}

.card-size-medium .card__header-extra {
    font-size: 16px;
}

.card-size-medium .card__content {
    font-size: 15px;
    padding: 0px 24px 20px;
}

.card-size-medium .card__footer {
    font-size: 15px;
    padding: 0px 24px 20px;
}

.card-size-medium .card__action {
    font-size: 15px;
    padding: 20px 24px;
}

.card-size-large .card__header {
    padding: 23px 32px 24px;
}

.card-size-large .card__header-main {
    font-size: 19px;
}

.card-size-large .card__header-extra {
    font-size: 17px;
}

.card-size-large .card__content {
    font-size: 16px;
    padding: 0px 32px 24px;
}

.card-size-large .card__footer {
    font-size: 16px;
    padding: 0px 32px 24px;
}

.card-size-large .card__action {
    font-size: 16px;
    padding: 24px 32px;
}

.card-size-huge .card__header {
    padding: 27px 40px 28px;
}

.card-size-huge .card__header-main {
    font-size: 20px;
}

.card-size-huge .card__header-extra {
    font-size: 18px;
}

.card-size-huge .card__content {
    font-size: 17px;
    padding: 0px 40px 28px;
}

.card-size-huge .card__footer {
    font-size: 17px;
    padding: 0px 40px 28px;
}

.card-size-huge .card__action {
    font-size: 17px;
    padding: 28px 40px;
}

.card-round-normal {
    border-radius: 3px;
}

.card-round-circle {
    border-radius: 34px;
}

.card--bordered-true {
    border: 1px solid rgb(239, 239, 245);
}

.card--embedded-true {
    background-color: rgb(239, 239, 245);
}

.card--hoverable-true:hover {
    box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.08), 0 3px 6px 0 rgba(0, 0, 0, 0.06), 0 5px 12px 4px rgba(0, 0, 0, 0.04);
}

.card__header {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-size: 18px;
    padding: 19px 24px 20px 24px;
}

.card__header-main {
    font-weight: 500;
    transition: color .3s cubic-bezier(0.4, 0, 0.2, 1);
    flex: 1;
    color: #222222;
}

.card__header-extra {
    display: flex;
    align-items: center;
    font-weight: 400;
    transition: color .3s cubic-bezier(0.4, 0, 0.2, 1);
    color: #222222;
}

.card__header-close {
    font-size: 18px;
    cursor: pointer;
    color: rgba(122, 122, 122, 1);
    height: 1em;
    width: 1em;
    line-height: 1em;
    text-align: center;
    display: inline-block;
    position: relative;
    fill: currentColor;
    margin-left: 20px;
    transition: color .3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card__header-close:hover {
    color: #595959;
    fill: currentColor;
}

.card__header-close:active {
    color: #959595;
    fill: currentColor;
}

.card__content {
    box-sizing: border-box;
}

.card__footer {
    box-sizing: border-box;
}

.card__action {
    box-sizing: border-box;
    background-color: rgb(250, 250, 252);
}
</style>