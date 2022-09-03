<template>
  <button @click="emit('onClick')">{{ name }}</button>
</template>

<script setup lang="ts">
interface Props {
  name: string;
}
interface Emit {
  (e: "onClick"): void;
}
const { name } = defineProps<Props>();
const emit = defineEmits<Emit>();
</script>
