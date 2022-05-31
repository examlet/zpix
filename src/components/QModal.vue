<script setup lang="ts">
interface Props {
  modelValue?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
});

const emit = defineEmits(["update:modelValue"]);

function closePopup(): void {
  emit("update:modelValue", false);
}

const modal = ref<HTMLElement>();

function focusAtPopup(): void {
  setTimeout(() => {
    if (modal.value) modal.value.focus();
  }, 100);
}

watchEffect(() => {
  // if (props.modelValue) focusAtPopup();
});

onMounted(() => {
  // if (props.modelValue) focusAtPopup();
});
</script>

<template>
  <transition name="fade">
    <div v-show="props.modelValue" class="modal" @mousedown="closePopup">
      <transition name="bounce">
        <div v-show="props.modelValue" @mousedown.stop @keydown.esc="closePopup" class="modal__content" ref="modal"
          tabindex="0">
          <slot :modelValue="modelValue" />
        </div>
      </transition>
    </div>
  </transition>
</template>

<style scoped>
.modal {
  /* background-color: rgba(162, 153, 40, 0.1); */
  background-color: rgba(33, 33, 33, 0.46);
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
}

.modal__content {
  position: relative;
  box-shadow: 0 11px 15px -7px rgb(0 0 0 / 20%), 0 24px 38px 3px rgb(0 0 0 / 14%), 0 9px 46px 8px rgb(0 0 0 / 12%);
}

.fade-enter-active {
  animation: fade 300ms;
}

.fade-leave-active {
  animation: fade 300ms reverse;
}

.bounce-enter-active {
  animation: bounce 300ms;
}

.bounce-leave-active {
  animation: bounce 300ms reverse;
}

@keyframes fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes bounce {
  0% {
    transform: scale(0);
  }

  80% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}
</style>